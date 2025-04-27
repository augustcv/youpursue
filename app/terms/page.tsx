import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | YouPursue",
  description: "Terms and conditions for using YouPursue's international exchange programs and services.",
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the YouPursue website and services, including our
              international exchange programs. By accessing our website or using our services, you agree to be bound by
              these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <p>
              <strong>"YouPursue"</strong> refers to YouPursue GmbH, a company registered in Germany.
              <br />
              <strong>"Services"</strong> refers to the international exchange programs and related services offered by
              YouPursue.
              <br />
              <strong>"User"</strong> refers to any individual who accesses our website or uses our services.
              <br />
              <strong>"Participant"</strong> refers to any student who participates in our exchange programs.
              <br />
              <strong>"Host Family"</strong> refers to any family that hosts an exchange student.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Exchange Program Terms</h2>
            <h3 className="text-xl font-medium mb-2">3.1 Application and Selection</h3>
            <p>
              All applications to our exchange programs are subject to review and approval by YouPursue. We reserve the
              right to accept or reject any application based on our selection criteria, which include but are not
              limited to: age requirements, academic standing, personal character, and family circumstances.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">3.2 Program Fees</h3>
            <p>
              Program fees are clearly stated on our website and during the application process. These fees are
              non-refundable except in specific circumstances outlined in our refund policy. Additional costs such as
              travel expenses, visa fees, and personal spending money are not included in the program fees.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">3.3 Participant Responsibilities</h3>
            <p>
              Participants are expected to:
              <br />- Comply with all laws of the host country
              <br />- Follow the rules established by their host family
              <br />- Attend school regularly and maintain satisfactory academic performance
              <br />- Respect the customs and culture of the host country
              <br />- Maintain regular communication with YouPursue staff
              <br />- Fulfill their hosting obligations when it's their turn to host
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">3.4 Host Family Responsibilities</h3>
            <p>
              Host families are expected to:
              <br />- Provide a safe and supportive environment for the exchange student
              <br />- Treat the exchange student as a member of the family
              <br />- Provide meals and appropriate accommodation
              <br />- Assist with school enrollment and transportation
              <br />- Maintain regular communication with YouPursue staff
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">3.5 Program Termination</h3>
            <p>
              YouPursue reserves the right to terminate a participant's program if they violate these terms, break local
              laws, or engage in behavior that puts themselves or others at risk. In such cases, the participant will be
              responsible for any additional costs associated with early return.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Website Use</h2>
            <p>
              The content of our website is for general information and use only. It is subject to change without
              notice. Your use of any information or materials on this website is entirely at your own risk, for which
              we shall not be liable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
            <p>
              Your use of our website and services is also governed by our Privacy Policy, which outlines how we
              collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              YouPursue shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
              arising out of your access to, or use of, our website or services. This includes, but is not limited to,
              loss of data, income, or profit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Germany. Any
              disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Germany.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              YouPursue reserves the right to modify these Terms and Conditions at any time. We will notify users of any
              significant changes. Your continued use of our website or services after such modifications constitutes
              your acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              Email: youpursuecare@gmail.com
              <br />
              Phone: +49 170 7451220
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">Last updated: April 15, 2024</p>
        </div>
      </div>
    </div>
  )
}
