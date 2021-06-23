import React from "react";
import Link from "next/link";

const ShowResultPate = ({ endTestMsg }) => {
  return (
    <div className="initial-test__show-result-page">
      <p className="initial-test__show-result-page-p">
        Vas trenutni nivo znanje je {`${endTestMsg}`}
      </p>
      <Link href="/kursevi" passHref>
        <a className="initialTest__show_result_page_btn">Zavrsi test</a>
      </Link>
    </div>
  );
};

export default ShowResultPate;
