const termconditionData = [
  {
    title: "What personal information do we collect?",
    description:
      "We collect personal information that you provide to us directly, such as your name, address, phone number, and email address. We may also collect personal information indirectly, such as through third-party sources.",
  },
  {
    title: "How do we use your personal information?",
    description:
      "We use your personal information to provide directory listings and to respond to your inquiries. We may also use your personal information for internal purposes, such as to improve our site and to better understand our users.",
  },
  {
    title: "Will we share your personal information with third parties?",
    description:
      "We may share your personal information with third parties for the purpose of marketing or advertising. We will only share your personal information with third parties with your prior consent, and we will take steps to ensure that any third parties with whom we share your personal information are bound by appropriate confidentiality and security measures.",
  },
  {
    title: "How do we protect your personal information?",
    description:
      "We take steps to protect the security of your personal information, including using secure servers and encryption. We also have in place physical, electronic, and managerial safeguards to protect against unauthorized access to and misuse of your personal information.",
  },
  {
    title: "Compliance with laws and regulations",
    description:
      "We comply with all relevant laws and regulations, including the General Data Protection Regulation (GDPR) in the European Union.",
  },
  {
    title: "Changes to this privacy policy",
    description:
      "We may update this privacy policy from time to time, and we encourage you to review it periodically. If we make any material changes to this privacy policy, we will notify you through a notice on our site or by email.",
  },
  {
    title: "Contact us",
    description:
      "If you have any questions or concerns about our privacy policy, please contact us at info@vacationrentals.tools. This privacy policy is effective as of  March 15th, 2024",
  },
];

function ConditionDescription({ title, description }) {
  return (
    <div className="condition-block">
      <h3 className="condition__title">{title}</h3>
      <p className="condition__description">{description}</p>
    </div>
  );
}

function termCondition() {
  return (
    <>
      <section className="section-terms">
        <div className="row">
          <div className="col-12">
            <div className="title-container">
              <h2 className="title">Privacy Policy</h2>
            </div>
            <article className="conditions">
              {termconditionData.map((term) => (
                <ConditionDescription
                  title={term.title}
                  description={term.description}
                />
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default termCondition;
