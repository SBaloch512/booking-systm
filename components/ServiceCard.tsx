type ServiceCardProps = {
  name: string
  price: string
  duration: string
  description: string
  index: number
}

export default function ServiceCard({ name, price, duration, description, index }: ServiceCardProps) {
  return (
    <div
      className="group relative border border-border-gray hover:border-gold/40 transition-all duration-500 p-8 bg-charcoal/20 hover:bg-charcoal/40"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Index Number */}
      <span className="absolute top-6 right-8 font-display text-5xl font-light text-white/5 group-hover:text-gold/10 transition-colors duration-500 select-none">
        0{index + 1}
      </span>

      {/* Top line accent */}
      <div className="w-8 h-px bg-gold mb-6 transition-all duration-500 group-hover:w-16" />

      <h3 className="font-display text-3xl font-light text-ivory mb-3 tracking-wide">
        {name}
      </h3>

      <p className="font-body text-sm font-light text-light-gray leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex items-end justify-between">
        <div>
          <span className="font-display text-4xl font-medium text-gold">{price}</span>
        </div>
        <div className="text-right">
          <span className="font-body text-xs tracking-[0.2em] text-light-gray uppercase">
            {duration}
          </span>
        </div>
      </div>
    </div>
  )
}
