import React from 'react';

import '../styles/verify.css';

import { useParams } from 'react-router-dom';

export default function VerifyInsurance() {
  const { encodedData } = useParams();

  let data;

  try {
    data = JSON.parse(window.atob(encodedData));
    if ([data.name, data.issueDate, data.reference].includes(undefined)) {
      throw new Error('Malformed data.');
    }
  } catch {
    return (
      <div>Invalid Insurance.</div>
    );
  }

  return (
    <>
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>WIS - Verify Cover Result</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="icon" type="image/png" href="images/favicon.png" />

        <link href="vendor.css" rel="stylesheet" />
        <style type="text/css" />
      </head>

      <div className="section bg-watermark">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
              <div className="panel verify-cover-result">
                <div className="panel-body">
                  <div className="row text-center">
                    <img
                      src="/images/alliance.png"
                      alt=""
                      className="verify-cover-partner-logo"
                    />
                    <h2 className="font-light verify-cover-title">
                      Verification Result
                    </h2>

                    <div className="alert alert-success" role="alert">
                      <i className="fa fa-check left-icon" />
                      <span>Verification Successful</span>
                    </div>
                    <p>
                      We can confirm that based on the above information, cover
                      has been issued with reference ITL/
                      {data.reference}
                      /AE
                      {new Date().getFullYear()}
                      {' '}
                      for:
                    </p>
                    <ul>
                      <li>{data.name}</li>
                    </ul>

                    <p>
                      Issue Date:
                      {' '}
                      <b>{data.issueDate}</b>
                    </p>
                    <p>
                      Your cover will be effective from the date you enter the
                      GCC (UAE, Oman, Bahrain, Kuwait, Qatar &amp; Saudi Arabia)
                      as stamped on your passport and will apply for the
                      Validity Period stated in certificate of insurance (number
                      of days) provided you enter the GCC (UAE, Oman, Bahrain,
                      Kuwait, Qatar &amp; Saudi Arabia) within 70 days of the
                      policy issue date.
                    </p>

                    <p>
                      <a
                        target="_blank"
                        href="/pdf/Policy Wording - Inbound Travel.pdf"
                        className="btn btn-document"
                        rel="noreferrer"
                      >
                        <i className="fa fa-file-text left-icon" />
                        Policy Wording - Inbound Travel
                      </a>
                    </p>

                    <p>
                      If you have any questions or concerns, Please contact +971
                      4 5516325 for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
