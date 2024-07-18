import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionItem from "./components/Accordion/AccordionItem.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of plannig highly individualized vacation
                trips for more thna 20 years.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We ar not doing this along from our office.</p>
              <p>
                Instead, we are working with local guides to ensurea safe an
                pleasant vacation.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
