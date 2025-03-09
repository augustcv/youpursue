import { GlobeIcon, BookOpen, Users, Home } from "lucide-react"

const features = [
  {
    name: "Global Network",
    description:
      "Join our vibrant community of exchange students from various countries, creating friendships that last a lifetime.",
    icon: GlobeIcon,
  },
  {
    name: "Learning Adventures",
    description:
      "Turn your education into an exciting journey! Study at local schools while exploring new cultures and creating unforgettable memories.",
    icon: BookOpen,
  },
  {
    name: "Cultural Immersion",
    description:
      "Live like a local, not just a tourist. Experience daily life in a new culture and create authentic connections worldwide.",
    icon: Users,
  },
  {
    name: "Welcoming Homes",
    description:
      "Stay with carefully selected host families who will welcome you as part of their family, making you feel at home away from home.",
    icon: Home,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32 bg-white w-full overflow-hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 w-full px-4 sm:px-6">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-black p-2">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-black">{feature.name}</h3>
            </div>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

