import React from 'react'

import styles from './page.module.scss'
const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPage}>
      <h1>Privacy Policy</h1>
      <h2>
        Last updated: <span>September 10, 2025</span>
      </h2>
      <section>
        <p>
          This website values your privacy. The only data collected is through
          Google Analytics, which helps me understand how visitors use the site
          so I can improve the content and experience.
        </p>
        <ul>
          <li>
            Google Analytics may collect information such as pages visited, time
            spent on the site, and the type of device/browser used.
          </li>
          <li>
            This information is collected anonymously and cannot be used to
            personally identify you.
          </li>
          <li>
            No personal information (such as names, emails, or contact details)
            is collected or stored by this website.
          </li>
          <li>
            You can learn more about how Google uses this data{' '}
            <a
              href='https://policies.google.com/technologies/partner-sites'
              target='_blank'
            >
              here
            </a>
          </li>
          <li>
            If you prefer, you can opt out of Google Analytics by installing the{' '}
            <a href='https://tools.google.com/dlpage/gaoptout' target='_blank'>
              browser add-on
            </a>
          </li>
        </ul>

        <p>
          By using this website, you agree to the collection of anonymous
          analytics data as described above.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
