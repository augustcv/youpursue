import Image from "next/image"
import { MessageCircle, Mail } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-black">About YouPursue</h1>
        <div className="space-y-8">
          <p className="text-black text-lg">
            YouPursue was founded with a simple yet powerful vision: to make international student exchange more
            connecting, and enriching for everyone. We believe that experiencing different cultures and educational
            systems is key to developing global citizens who can thrive in our interconnected world.
          </p>

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/818512ED-6595-42F1-A36A-D5F117233A6E_1_105_c-b8a8NMrDMbaBdoh5VGP5iYjWKot4b6.jpeg"
              alt="Founder at Iguazu Falls"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <p className="text-lg font-semibold">August Volger</p>
              <p className="text-sm">Founder of YouPursue</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-black">Our Mission</h2>
          <p className="text-black text-lg">
            To facilitate life-changing international exchange experiences that foster cross-cultural understanding,
            personal growth, and global competence among students worldwide.
          </p>

          <h2 className="text-2xl font-semibold text-black">What Sets Us Apart</h2>
          <ul className="list-disc pl-5 space-y-2 text-black text-lg">
            <li>Peer-to-Peer Matching: We connect students directly, cutting out expensive middlemen and agencies.</li>
            <li>
              Personalized Experiences: Our matching algorithm ensures that students are paired based on shared
              interests and goals.
            </li>
            <li>
              Options: By leveraging our peer-to-peer model, we can offer exchange experiences at a fraction of the cost
              of traditional programs.
            </li>
            <li>
              Comprehensive Support: From the application process to the return home, our team provides guidance and
              support every step of the way.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">Our Team</h2>
          <p className="text-black text-lg">
            YouPursue is run by a dedicated team of educators, former exchange students, and technology experts who are
            passionate about international education. Our diverse backgrounds and experiences inform our approach and
            drive our commitment to excellence in every aspect of our program.
          </p>
          <p className="text-black text-lg">
            Join us in our mission to make the world a little smaller and a lot more connected. With YouPursue, your
            global adventure awaits!
          </p>

          <div className="bg-blue-50 p-8 rounded-xl shadow-md my-12 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Join Our Team at YouPursue</h3>
            <p className="text-gray-700 mb-6">
              Are you passionate about international education and cultural exchange? We're always looking for
              enthusiastic individuals to join our growing team. Whether you have experience in education, international
              relations, marketing, or technology, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-md">
                <Mail className="h-4 w-4" />
                <span>Contact Us: youpursuecare@gmail.com</span>
              </div>
              <a
                href="https://wa.me/491707451220?text=I'm%20interested%20in%20joining%20the%20YouPursue%20team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-black hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
