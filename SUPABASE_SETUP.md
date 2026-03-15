# Supabase setup for Barber Booking

## Create account / Log in — do you need another table?

**No.** Sign up and log in use **Supabase Auth**. Users are stored in Supabase’s built-in `auth.users` table. You do **not** need to create a separate table for “accounts” for basic email/password auth.

### What’s already in place

- **Sign up** (`/signup`): `supabase.auth.signUp()` creates the user in `auth.users`. Optional “Your name” is sent as `user_metadata.full_name`.
- **Log in** (`/login`): `supabase.auth.signInWithPassword()` signs the user in.

No extra tables are required for this to work.

---

## Optional: `profiles` table (e.g. display name, avatar)

If you want to store extra data per user (display name, phone, avatar), you can add a **profiles** table that mirrors each user by `id`:

### 1. Create the table (Supabase → SQL Editor)

```sql
-- Optional: profiles linked to auth.users
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  updated_at timestamptz default now()
);

-- Allow users to read/update their own profile
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Automatically create a profile row when a user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
```

### 2. Use it in your app

After signup, you can read the current user and their profile:

```ts
const { data: { user } } = await supabase.auth.getUser();
// user.user_metadata.full_name has the name from signup

// If you added profiles table:
const { data: profile } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', user?.id)
  .single();
```

---

## Summary

| Feature        | Table needed? | Notes                          |
|----------------|---------------|---------------------------------|
| Create account | No            | Use Supabase Auth (`auth.users`) |
| Log in         | No            | Same                            |
| Extra profile  | Optional      | Add `profiles` + trigger above  |
| Bookings       | Yes           | You already have `BOOKINGS`     |
