import React from 'react'
import cardimg from'../assets/images/shirt-3.png'
// import Mainnav from './Mainnav'
import next from '../assets/images/next-icon.png'
import previous from '../assets/images/prevew-icon.png'
import boxer from '../assets/images/boxers-img.png'
import inchtap from '../assets/images/siora-img.png'
import guy from '../assets/images/jusdevoyage-img.png'
import popimg from '../assets/images/Group-img.png'
import girlimg from '../assets/images/member-1.png'
import topa from '../assets/images/member-2.jpg'
import tato from '../assets/images/member-3.jpg'

function Productdetail() {
  return (
    <>
  <section id="cart-item-sec">
      <div class="container cart-item-con">
        <div class="row cart-item-row">
          <div class="col-xl-6">
            <div class="card-wrapper">
              <div class="card">
               
                <div class="product-imgs">
                  <div class="img-display">
                    <div class="img-showcase">
                      <img
                        src={girlimg}
                        alt="shoe image"
                      />
                      <img
                        src={girlimg}
                        alt="shoe image"
                      />
                      <img
                        src={girlimg}
                        alt="shoe image"
                      />
                      <img
                        src={girlimg}
                        alt="shoe image"
                      />
                      <img
                        src={girlimg}
                        alt="shoe image"
                      />
                    </div>
                  </div>
                  <div class="img-select">
                    <div
                      id="carousel"
                      class="carousel gallery"
                      data-ride="carousel"
                    >
                     
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="img-item">
                            <a href="" data-id="1">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item carousel3">
                          <div class="img-item">
                            <a href="" data-id="2">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-item">
                            <a href="" data-id="3">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-item">
                            <a href="" data-id="4">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-item">
                            <a href="" data-id="5">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item carousel3">
                          <div class="img-item">
                            <a href="" data-id="2">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-item">
                            <a href="" data-id="3">
                              <img
                                src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-item">
                            <a href="" data-id="4">
                              <img
                               src={girlimg}
                                alt="shoe image"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 cart-item-custom-column">
            <form>
              <div class="product-size">
                <div class="size-heading">
                  <h4>Size</h4>
                </div>
                <div class="size-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    S
                  </label>
                </div>
                <div class="size-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    M
                  </label>
                </div>
                <div class="size-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    L
                  </label>
                </div>
                <div class="size-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios4"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios4">
                    XL
                  </label>
                </div>
                <div class="size-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios5"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios5">
                    2XL
                  </label>
                </div>
                <div class="size-guide">
                  <a href="#">Size Guide</a>
                </div>
              </div>

              <div class="product-style">
                <div class="style-heading">
                  <h4>Style</h4>
                </div>
                <div class="diff-names-products">
                  <div class="form-row style-names">
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Unexpected
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label class="form-check-label" for="defaultCheck2">
                        Fish Cake
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck3"
                      />
                      <label class="form-check-label" for="defaultCheck3">
                        Uzui
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck4"
                      />
                      <label class="form-check-label" for="defaultCheck4">
                        Chainsaw
                      </label>
                    </div>
                  </div>
                  <div class="form-row style-names">
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck5"
                      />
                      <label class="form-check-label" for="defaultCheck5">
                        Kenshi
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck6"
                      />
                      <label class="form-check-label" for="defaultCheck6">
                        Menace
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck7"
                      />
                      <label class="form-check-label" for="defaultCheck7">
                        Titan
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck8"
                      />
                      <label class="form-check-label" for="defaultCheck8">
                        Tensei Uzui
                      </label>
                    </div>
                  </div>
                  <div class="form-row style-names">
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck9"
                      />
                      <label class="form-check-label" for="defaultCheck9">
                        Beserk
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck10"
                      />
                      <label class="form-check-label" for="defaultCheck10">
                        A5 Wagyu
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck11"
                      />
                      <label class="form-check-label" for="defaultCheck11">
                        Revenge
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck12"
                      />
                      <label class="form-check-label" for="defaultCheck12">
                        Experimental
                      </label>
                    </div>
                  </div>
                  <div class="form-row style-names">
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck13"
                      />
                      <label class="form-check-label" for="defaultCheck13">
                        Unexpected
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck14"
                      />
                      <label class="form-check-label" for="defaultCheck14">
                        Fish Cake
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck15"
                      />
                      <label class="form-check-label" for="defaultCheck15">
                        Uzui
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck16"
                      />
                      <label class="form-check-label" for="defaultCheck16">
                        Chainsaw
                      </label>
                    </div>
                  </div>
                  <div class="form-row style-names">
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck17"
                      />
                      <label class="form-check-label" for="defaultCheck17">
                        Kenshi
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck18"
                      />
                      <label class="form-check-label" for="defaultCheck18">
                        Menace
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck19"
                      />
                      <label class="form-check-label" for="defaultCheck19">
                        Titan
                      </label>
                    </div>
                    <div class="style-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck20"
                      />
                      <label class="form-check-label" for="defaultCheck20">
                        Tensei Uzui
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="check-membership-row">
                <div class="check-membership-checkbox">
                  <span>
                    <input type="radio" id="test1" name="radio-group" checked />
                    <label for="test1">Retail Guest Checkout</label>
                    <p class="buy-text">Buy 1 get 1 free for now</p>
                  </span>

                  <p>
                    <input type="radio" id="test2" name="radio-group" />
                    <label for="test2">VIP MEMBERSHIP OFFER:</label>
                  </p>
                </div>
                <div class="check-membership-amount">
                  <div class="membership-amount">
                    <p>$ 30.0 USD</p>
                  </div>

                  <div class="membership-amount">
                    <p>BUY ONE GET TWO FREE</p>
                  </div>
                </div>
              </div>

              <p class="vip-member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est. Nulla neque sapien, mattis at
                molestie id, auctor faucibus ligula. Pellentesque laoreet luctus
                erat, at ullamcorper neque feugiat id. Nulla neque sapien,
                mattis at molestie id, auctor faucibus ligula. Pellentesque
                laoreet luctus erat, at ullamcorper neque feugiat id.
                <a href="#">Learn More About VIP Memebership</a>
              </p>
              <div class="product-detail">
                <a href="#!"
                  ><button type="button" class="adtocart-btn">
                    ADD ITEM TO CART
                  </button></a
                >
              </div>

              <div class="cart-item-style-btns-row">
                <div class="cart-item-option-title">
                  <h2>Description:</h2>
                </div>

                <div class="cart-item-description-column">
                  <div class="description-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a tempus augue, id convallis est. Nulla neque
                      sapien, mattis at molestie id, auctor faucibus ligula.
                      Pellentesque laoreet luctus erat, at ullamcorper neque
                      feugiat id. Nulla neque sapien, mattis at molestie id,
                      auctor faucibus ligula. Pellentesque laoreet luctus erat,
                      at ullamcorper neque feugiat id.
                    </p>

                    <p>
                      <a href="#"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Proin a tempus augue, id convallis est.</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )}
export default Productdetail