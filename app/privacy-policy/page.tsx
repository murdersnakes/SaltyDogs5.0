import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className='cont py-24 prose'>
        <h1 className='h1'>Privacy Policy</h1>
        <h2 className='h2'>Introduction</h2>

        <p className='p'>
          A user can access our site without providing any information at all.
          The only part of this website that collects user information, is the
          Contact form page which requires the user to enter personal
          information such as Name, Location, Email Address and Phone Number.
          The information collected through this is only used for follow up
          enquiries and quotations. We do not follow a user&apos;s browsing path
          outside of our websites.
        </p>

        <h3 className='h3'>Information Automatically Logged</h3>

        <p className='p'>
          We log your IP address, browser&apos;s user agent, and referring
          address to help diagnose problems with our server, to administer our
          website and to identify unique users. Your IP address is also used to
          gather broad demographic information.
        </p>

        <h3 className='h3'>Use of Cookies</h3>

        <p className='p'>
          A cookie is a small data file which is sent from a web server to a web
          browser when that browser visits the server&apos;s site. Cookies may
          be used on the IPL group website to remember your login, to track web
          traffic on an aggregate basis so that no individuals are identified.
          Most browsers allow you to turn-off cookies. If you want to know how
          to do this, please look at the help menu on your browser. However,
          switching off cookies may restrict your use of our website.
        </p>

        <h3 className='h3'>External Links</h3>

        <p className='p'>
          We do not follow your browsing data once you leave our site.
        </p>

        <h3 className='h3'>Security</h3>

        <p className='p'>
          This site has security measures in place to protect the loss, misuse
          and alteration of the information under our control. Unfortunately, no
          data transmission over the internet can be guaranteed to be 100 per
          cent secure. As a result, while we strive to protect your personal
          information, IPL group cannot ensure or warrant the security of any
          information you transmit to us, and you do so at your own risk. Once
          we receive your transmission, we make our best effort to ensure its
          security on our systems.
        </p>

        <p>
          All information provide is correct at time of publishing. Every effort
          is made to keep the information as up to date as possible.
        </p>

        <h3 className='h3'>Contacting the Website</h3>

        <p className='p'>
          If you have any questions about this website, or the security
          practices of this site, you can contact Urban Elements at{" "}
          <Link className='link_1' href='mailto:info.saltydogs@gmail.com'>
            info.saltydogs@gmail.com
          </Link>
        </p>

        <h3 className='h3'>Translations</h3>

        <p className='p'>
          Translation service provided by Google Translate plugin, therefore IPL
          group cannot take any responsibility from any inaccurate translations
          it provides.
        </p>

        <h3 className='h3'>Irish Data Protection Commissioner</h3>

        <p className='p'>
          Further information on your data privacy rights are available on the
          website of the Irish data protection commissioner.{" "}
          <Link className='link_1' href={"www.dataprotection.ie"}>
            www.dataprotection.ie
          </Link>
        </p>

        <h3 className='h3'>Changes to our Website/Privacy Policy</h3>

        <p className='p'>
          This privacy policy may be changed at any time. If we change our
          privacy policy in the future, we will explain those changes here, so
          that you will always know what personal information we gather and the
          purposes we might use it for.
        </p>
      </div>
    </div>
  );
}
