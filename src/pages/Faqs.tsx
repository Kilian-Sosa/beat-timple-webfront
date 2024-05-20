import { useState } from "react";
import { faqs } from "../api/faq/faq"
import '../styles/faqs.scss';

export const Faqs = () => {

    const [faqSelected, setFaqSelected] = useState(0)

    const handleFaqSelected = (faqID: any) => {
        setFaqSelected(faqID)
    }

    const faqsArray = faqs;
    //console.log(faqsArray)
    faqsArray.map(faq => {
        console.log(faq.question)
    })

    return (
        <>
            <div className="faq-cont">

  

                    {
                        faqsArray.map((faq, index) => (
                            <div key={index} className="faq-content">
                                <div className={faq.id === faqSelected ? 'faq-question selected' : 'faq-question'} key={index}
                                    onClick={() => handleFaqSelected(faq.id)}
                                >
                                    <h3>
                                        {faq.question}
                                    </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#6B6B78" }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                                </div>
                                {
                                    faq.id === faqSelected &&
                                    <p className="faq-answer">{faq.answer}</p>
                                }
                            </div>
                        ))
                    }
           
            </div>
        </>

    )
}