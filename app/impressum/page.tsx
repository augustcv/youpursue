import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Legal Notice | YouPursue",
  description: "Legal information about YouPursue, including contact details and responsible parties.",
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Impressum (Legal Notice)</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
            <p>
              <strong>YouPursue GmbH</strong>
              <br />
              Schäferhof 1
              <br />
              31582 Nienburg
              <br />
              Germany
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Phone: +49 170 7451220
              <br />
              Email: youpursuecare@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Represented by</h2>
            <p>August Volger, CEO</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Commercial Register</h2>
            <p>
              Registered at the District Court of Niedersachsen
              <br />
              Registration Number: HRB 987654
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VAT Identification Number</h2>
            <p>VAT ID according to §27a Value Added Tax Act: DE294718563</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Responsible for Content according to § 55 Abs. 2 RStV</h2>
            <p>
              August Volger
              <br />
              Schäferhof 1
              <br />
              31582 Nienburg
              <br />
              Germany
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS):
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Our email address can be found above in the impressum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Consumer Dispute Resolution/Universal Dispute Resolution Body
            </h2>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer
              arbitration board.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
