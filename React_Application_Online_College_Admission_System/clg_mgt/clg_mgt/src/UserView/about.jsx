// import React from 'react'

const About = () => {
  return (
    <section id="about">

            <div className="container px-5 my-5 py-4">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="fw-bolder my-4 mainFontColor">WELCOME TO IFET</h1>
                        <p className="about_para">Founded in 1998 by eminent Industrialists and some benign NRIs, Indo French Educational Trust (IFET) is committed to promote education and research in the field of Engineering and Technology and to collate and disseminate in such fields with effective ideas, methods and techniques. The Trust has dedicated itself in educating and helping the rural youth in acquiring an understanding of Technology and its importance and value in day-to-day life as its vision. The trust has taken definite strides in achieving its vision under the able and active management of Mr.K.V. Raja-Chairman, Mr.K. Shivram Alva- Secretary and Mr. R. Vimal-Tresurer. The Trustees are personalities of high profile with rich and varied experience. IFET College of Engineering is a dream-come-true of the prescient and shrewd trustees. The Institution has gradually matured in all dimensions to establish a high standard of competence and excellence in engineering and technology.</p>
                        <button className="px-4 py-2 know_more_btn">Know More </button>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="mt-md-5 mt-3">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="mainFontColor accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        OUR VISION
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p>To Deliver quality education of international standard and produce engineers competent at Regional,National and Global levels.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                    <button className="mainFontColor accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        OUR MISSION
                                    </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p>Striving to be the best in what we do,persistent and relentless in our pursuit of quality and never being satisfied with the status quo.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button className="mainFontColor accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Quality policy
                                    </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <ul>
                                          <li>To Plan and Implement Innovative Teaching & Learning Process.</li>
                                          <li>To Provide Quality Education Matching with futuristic trends in Engineering & Technology.</li>
                                          <li>To Develop the College into a Global Institute of Learning and Research of Academic Excellence.</li>
                                          <li>To Strive establishing and effective Quality Management system ensuring Continual improvement.</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default About