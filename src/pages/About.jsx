import React from 'react';
import { Link } from 'react-router-dom';

import '../style/main.scss';

const About = () => {
  return (
    <div className='about'>
      <h4>
        <Link to='/' className='text-info my-nav'>
          {' '}
          Back
        </Link>
      </h4>
      <div className='container'>
        <table>
          <tbody>
            <tr>
              <td>
                <h5>Residence:</h5>
              </td>
              <td>
                <h5>Ukraine, Zaporozhye</h5>
              </td>
            </tr>

            <tr>
              <td>
                <h5> Citizenship:</h5>
              </td>
              <td>
                <h5> Ukraine, </h5>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Relocation:</h5>
              </td>
              <td>
                <h5>Ready for business trips</h5>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Objective</h5>
              </td>
              <td>
                <h5>FrontEnd,BackEnd, FullStack developer JUNIOR</h5>
              </td>
            </tr>

            <tr>
              <td>Soft skills</td>
              <td>
                <p>
                  React, Redux, javaScript, Node.js, MongoDB, HTML,CSS, SCSS,
                  Bootstrap, Material UI, Photoshop, GIT
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Employment</h5>
              </td>
              <td>
                <h5>Full time</h5>
              </td>
            </tr>

            <tr>
              <td>Portfolio:</td>
              <td>
                <h5>
                  <a
                    href='https://sershishkov.github.io/portfolio'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    My portfolio
                  </a>
                </h5>
              </td>
            </tr>

            <tr>
              <td>Work Experience:</td>
              <td></td>
            </tr>
            <tr>
              <td>June 2018 — now</td>
              <td>
                <h5>Manager in private company</h5>
                <h6>Ukraine, Zaporozhye</h6>
                <h5>Calculation of estimates</h5>
                <p>Repair and construction</p>
              </td>
            </tr>

            <tr>
              <td>June 2016 — May 2018</td>
              <td>
                <h5>Private entrepreneur</h5>
                <h6>Ukraine, Zaporozhye</h6>
                <h5>Realtor</h5>
                <p>
                  Selection of real estate. Work with owners and buyers.
                  Conducting transactions. Preparation of documents for the
                  transaction. Selection of alternatives. Work with objections.
                  Cold calls. Training company employees.
                </p>
              </td>
            </tr>

            <tr>
              <td>February 2015 — April 2016</td>
              <td>
                <h5>OGRK-centre</h5>
                <h6>Moscow, www.ogrk-center.ru</h6>
                <h5>Realtor</h5>
                <p>
                  Selection of real estate. Work with owners and buyers.
                  Conducting transactions. Mortgage. Selection of alternatives.
                  Work with objections. Cold calls.For the year of work, I
                  received the status of "Silver Realtor", 6th place in the
                  rating of employees of the company for 2015.
                </p>
              </td>
            </tr>

            <tr>
              <td>June 2008 — December 2014</td>
              <td>
                <h5>Private entrepreneur</h5>
                <h6>Украина</h6>
                <h5>Self-employed</h5>
                <p>
                  Purchase and sale of metal doors wholesale and retail,
                  transport logistics, organization of warehousing and
                  accounting. Storage and transportation of grain.{' '}
                </p>
              </td>
            </tr>

            <tr>
              <td>Education</td>
              <td>Higher education</td>
            </tr>

            <tr>
              <td>2017</td>
              <td>GOIT, Ukraine,Kiev Front End, web developer,</td>
            </tr>

            <tr>
              <td>1994</td>
              <td>
                <h5>Technical University of Moldova</h5>
                <h6>Technological engineer</h6>
              </td>
            </tr>

            <tr>
              <td>Language skills:</td>
              <td>
                <h6>Russian native</h6>
                <h6>English intermediate(B1)</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
