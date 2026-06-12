// app/terms-of-service/page.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/client'
import { termsOfServiceQuery } from '@/lib/queries'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function TermsOfServicePage() {

  const [terms, setTerms] = useState(null);
  const [accept, setAccept] = useState(null);
  const [useWeb, setUseWeb] = useState(null);
  const [donatePay, setDonatePay] = useState(null);
  const [intel, setIntel] = useState(null);
  const [limit, setLimit] = useState(null);
  const [change, setChange] = useState(null);
  const [contact, setContact] = useState(null);
  // const [rightInformation, setRightInformation] = useState(null);
  // const [dataInformation, setDataInformation] = useState(null);
  // const [partyInformation, setPartyInformation] = useState(null);
  // const [policyInformation, setPolicyInformation] = useState(null);
  // const [contactInformation, setContactInformation] = useState(null);


  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(termsOfServiceQuery)
      console.log('Terms data:', data)

      // if (!data?.sections) return;

      // Terms Data's
      setTerms(data);

      data.sections.forEach((section) => {
        if (section?.title === 'Acceptance of Terms') {
          setAccept(section);
        } else if (section?.title === 'Use of Website') {
          setUseWeb(section)
        } else if (section?.title === 'Donations & Payments') {
          setDonatePay(section)
        } else if (section?.title === 'Intellectual Property') {
          setIntel(section)
        } else if (section?.title === 'Limitation of Liability') {
          setLimit(section)
        } else if (section?.title === ' Changes to Terms') {
          setChange(section)
        } else if (section?.title === 'Contact Us') {
          setContact(section)
        }
     

      })
    }
    getData()
  }, [])

  console.log('Contact  : ', contact);



  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF8] overflow-x-hidden">
        <PageHero title="Terms Of Services" breadcrumb="Terms Of Services" variant="who" />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">

              <div className="mb-8 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{terms?.dateLabel}</span> {terms?.date}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{accept?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {accept?.content[0]}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{useWeb?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {useWeb?.content[0]}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {useWeb?.listItems[0]}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                  <li>{useWeb?.listItems[1]}</li>
                  <li>{useWeb?.listItems[2]}</li>
                  <li>{useWeb?.listItems[3]}</li>
                  <li>{useWeb?.listItems[4]}</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{donatePay?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {donatePay?.content[0]}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{intel?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {intel?.content[0]}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{limit?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {limit?.content[0]}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{change?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {change?.content[0]}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{contact?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  <a href="mailto:notebynoteaz@gmail.com" className="text-[#C0392B] hover:underline">
                    {contact?.content[0]}
                  </a>
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={`${terms?.backButtonLink}`}
                  className="inline-flex items-center gap-2 text-[#C0392B] hover:text-[#A93226] transition-colors text-sm"
                >
                  <i className="bi bi-arrow-left"></i>
                  {terms?.backButtonLabel}
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}