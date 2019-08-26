import React from 'react';
import PropTypes from 'prop-types';

const TestPage = props => {
  return (
    <div className="container">
      <div className="py-3"></div>
      <form>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <fieldset>
                  <h6 className="col-form-label">Medication</h6>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      20%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      10%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option3"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      0
                    </label>
                  </div>
                </fieldset>
              </div>
              <div>
                <button className="btn btn-primary">+ Finding</button>
              </div>
            </div>
            <div>
              <div className="input-group input-group-sm mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">1</span>
                </div>
                <input className="form-control" name={`blahh`} placeholder="Finding" />
                <div className="input-group-append" id="button-addon4">
                  <button className="btn btn-outline-danger" type="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="input-group input-group-sm mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">2</span>
                </div>
                <input className="form-control" name={`blahh`} placeholder="Finding" />
                <div className="input-group-append" id="button-addon4">
                  <button className="btn btn-outline-danger" type="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <fieldset>
                  <h6 className="col-form-label">Medication</h6>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      20%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      10%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option3"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      0
                    </label>
                  </div>
                </fieldset>
              </div>
              <div>
                <button className="btn btn-primary">+ Finding</button>
              </div>
            </div>
            <div></div>
          </li>
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <fieldset>
                  <h6 className="col-form-label">Medication</h6>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      20%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      10%
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="item1.inlineRadioOptions"
                      value="option3"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      0
                    </label>
                  </div>
                </fieldset>
              </div>
              <div>
                <button className="btn btn-primary">+ Finding</button>
              </div>
            </div>
            <div>
              <div className="input-group input-group-sm mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">1</span>
                </div>
                <input className="form-control" name={`blahh`} placeholder="Finding" />
                <div className="input-group-append" id="button-addon4">
                  <button className="btn btn-outline-danger" type="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="input-group input-group-sm mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">2</span>
                </div>
                <input className="form-control" name={`blahh`} placeholder="Finding" />
                <div className="input-group-append" id="button-addon4">
                  <button className="btn btn-outline-danger" type="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

TestPage.propTypes = {
  children: PropTypes.element
};

export default TestPage;
