const termconditionData = [
  {
    title: "Acceptance of terms",
    description:
      " By using this website, you agree to be bound by these terms and conditions (the “Terms and Conditions”). If you do not agree to these Terms and Conditions, you must not use this website. ",
  },
  {
    title: "Modification of terms",
    description:
      "We reserve the right to modify these Terms and Conditions at any time. Such modifications shall be effective immediately upon posting. Your continued use of this website after any modifications indicates your acceptance of the modified Terms and Conditions.",
  },
  {
    title: "Accuracy of information",
    description:
      "We strive to ensure that the information on this website is accurate and up-to-date. However, we cannot guarantee the accuracy or completeness of the information provided. You agree that you use this website and the information contained therein at your own risk.",
  },
  {
    title: "Links to third-party websites",
    description:
      "This website may contain links to third-party websites. We do not control and are not responsible for the content or privacy practices of these websites. You access such websites at your own risk.",
  },
  {
    title: "Disclaimer of warranties",
    description:
      "This website is provided on an “as is” and “as available” basis. We make no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, or products included on this website.",
  },
  {
    title: "Limitation of liability",
    description:
      "In no event shall we be liable for any damages of any kind arising from the use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
  },
  {
    title: "Indemnification",
    description:
      "You agree to indemnify and hold us and our affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of this website, your violation of these Terms and Conditions, or your violation of any rights of another.",
  },
  {
    title: "Governing law",
    description:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws Malaga, Spain",
  },
  {
    title: "Entire agreement",
    description:
      "These Terms and Conditions constitute the entire agreement between you and us with respect to this website. If any provision of these Terms and Conditions is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.",
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
              <h2 className="title">Terms and Conditions</h2>
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
