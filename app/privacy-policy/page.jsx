// app/privacy-policy/page.tsx
'use client'


import { useState, useEffect } from 'react'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { privacyPolicyQuery } from '@/lib/queries'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function PrivacyPolicyPage() {

  const [privacy, setPrivacy] = useState(null);
  const [introduction, setIntroduction] = useState(null);
  const [information, setInformation] = useState(null);
  const [howInformation, setHowInformation] = useState(null);
  const [shareInformation, setShareInformation] = useState(null);
  const [donateInformation, setDonateInformation] = useState(null);
  const [cookiesInformation, setCookiesInformation] = useState(null);
  const [childInformation, setChildInformation] = useState(null);
  const [rightInformation, setRightInformation] = useState(null);
  const [dataInformation, setDataInformation] = useState(null);
  const [partyInformation, setPartyInformation] = useState(null);
  const [policyInformation, setPolicyInformation] = useState(null);
  const [contactInformation, setContactInformation] = useState(null);
  // const [val, setVal] = useState(null);
  // const [status, setStatus] = useState(null);
  // const [cta, setCta] = useState(null);


  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(privacyPolicyQuery)
      console.log('Privacy data:', data)

      if (!data?.sections) return;

      // Privacy Data's
      setPrivacy(data);

      data.sections.forEach((section) => {
        if (section?.title === 'Introduction') {
          setIntroduction(section);
        } else if (section?.title === 'Information We Collect') {
          setInformation(section)
        } else if (section?.title === 'How We Use Your Information') {
          setHowInformation(section)
        } else if (section?.title === 'Sharing Your Information') {
          setShareInformation(section)
        } else if (section?.title === 'Donation Information') {
          setDonateInformation(section)
        } else if (section?.title === 'Cookies & Tracking') {
          setCookiesInformation(section)
        } else if (section?.title === "Children's Privacy") {
          setChildInformation(section)
        } else if (section?.title === "Your Rights & Choices") {
          setRightInformation(section)
        } else if (section?.title === "Data Security") {
          setDataInformation(section)
        } else if (section?.title === "Third-Party Links") {
          setPartyInformation(section)
        } else if (section?.title === "Changes to This Policy") {
          setPolicyInformation(section)
        } else if (section?.title === "Contact Us") {
          setContactInformation(section)
        }
        //  else if (section._type === 'foundersSection') {
        //   setFounders(section)
        // } else if (section._type === 'valuesSection') {
        //   setVal(section)
        // } else if (section._type === 'statsSection') {
        //   setStatus(section)
        // } else if (section._type === 'ctaSection') {
        //   setCta(section)
        // }
      })
    }
    getData()
  }, [])

  console.log('ContactInformation:', contactInformation);
  // console.log('story:', story)
  // console.log('journey:', journey)
  // console.log('founders:', founders)
  // console.log('val:', val)
  // console.log('status:', status)
  // console.log('cta:', cta)


  return (
    <>
      <Navbar />
      <main className="bg-[#FFFDF8] overflow-x-hidden">
        <PageHero
          title={privacy?.breadcrumb}
          breadcrumb="Privacy Policy"
          variant="who" />

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">

              {/* Last Updated */}
              <div className="mb-8 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{privacy?.dateLabel}</span> {privacy?.date}
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{introduction?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {introduction?.content[0]}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {introduction?.content[1]}
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{information?.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#C0392B] mb-2">{information?.subSections[0]?.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {information?.subSections[0]?.content[0]}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>{information?.subSections[0]?.listItems[0]}</li>
                      <li>{information?.subSections[0]?.listItems[1]}</li>
                      <li>{information?.subSections[0]?.listItems[2]}</li>
                      <li>{information?.subSections[0]?.listItems[3]}</li>
                      <li>{information?.subSections[0]?.listItems[4]}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#C0392B] mb-2">{information?.subSections[1]?.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {information?.subSections[1]?.content[0]}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>{information?.subSections[1]?.listItems[0]}</li>
                      <li>{information?.subSections[1]?.listItems[1]}</li>
                      <li>{information?.subSections[1]?.listItems[2]}</li>
                      <li>{information?.subSections[1]?.listItems[3]}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{howInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {howInformation?.content[0]}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>{howInformation?.listItems[0]}</li>
                  <li>{howInformation?.listItems[1]}</li>
                  <li>{howInformation?.listItems[2]}</li>
                  <li>{howInformation?.listItems[3]}</li>
                  <li>{howInformation?.listItems[4]}</li>
                  <li>{howInformation?.listItems[5]}</li>
                </ul>
              </div>

              {/* Sharing Your Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{shareInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {shareInformation?.content[0]}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>{shareInformation?.listItems[0]}</li>
                  <li>{shareInformation?.listItems[1]}</li>
                  <li>{shareInformation?.listItems[2]}</li>
                  <li>{shareInformation?.listItems[3]}</li>

                </ul>
              </div>

              {/* Donation Information */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{donateInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {donateInformation?.content[0]}
                </p>
                <div className="bg-[#FEF5E7] rounded-lg p-4 border border-[#F5CBA7]">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#C0392B]">{donateInformation?.highlightBox}</span>
                    {/* All donations
                    to Note By Note AZ are tax-deductible as allowed by law. You will receive a receipt
                    for your records. */}
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{cookiesInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {cookiesInformation?.content[0]}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {cookiesInformation?.content[1]}
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{childInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {childInformation?.content[0]}
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{rightInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {rightInformation?.content[0]}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>{rightInformation?.listItems[0]}</li>
                  <li>{rightInformation?.listItems[1]}</li>
                  <li>{rightInformation?.listItems[2]}</li>
                  <li>{rightInformation?.listItems[3]}</li>
                  <li>{rightInformation?.listItems[4]}</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">

                  <a href="mailto:notebynoteaz@gmail.com" className="text-[#C0392B] hover:underline">
                    {rightInformation?.content[1]}
                  </a>
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{dataInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {dataInformation?.content[0]}
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{partyInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {partyInformation?.content[0]}
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{policyInformation?.title} </h2>
                <p className="text-gray-600 leading-relaxed">
                  {policyInformation?.content[0]}
                </p>
              </div>

              {/* Contact Us */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{contactInformation?.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {contactInformation?.content[0]}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <i className={`${contactInformation?.contactItems[0]?.icon} text-[#C0392B]`}></i>
                    <a href={`${contactInformation?.contactItems[0]?.href}`} className="hover:text-[#C0392B] transition">
                      {contactInformation?.contactItems[0]?.label}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <i className={`${contactInformation?.contactItems[1]?.icon} text-[#C0392B]`}></i>
                    {contactInformation?.contactItems[1]?.label}
                    {/* <br /> */}
                    {/* <span className="ml-6">Phoenix, Arizona</span> */}
                  </p>
                </div>
              </div>

              {/* Back to Home */}
              <div className="mt-8 text-center">
                <Link
                  href={`${privacy?.backButtonLink}`}
                  className="inline-flex items-center gap-2 text-[#C0392B] hover:text-[#A93226] transition-colors text-sm"
                >
                  <i className={`${contactInformation?.contactItems[2]?.icon}`}></i>
                  {contactInformation?.contactItems[2]?.label}
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