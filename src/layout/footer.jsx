import FooterIcon from "../components/FooterIcon";
import FooterList from "../components/FooterList";
import whatsapp from "../assets/WhatsApp_logo 1.png";

const Footer = () => {
  return (
    <footer className="bg-[#FD9255] py-36">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10 flex flex-wrap sm:justify-between gap-y-14 text-white sm:flex-row sm:items-start justify-center items-center flex-col">
        <div className="xl:w-2/5 sm:w-5/12 w-full">
          <a href="#" className="w-16 h-16">
            <svg
              width="64"
              height="64"
              viewBox="0 0 97 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cil:house">
                <path
                  id="Vector"
                  d="M77.2969 76.2272V46.5H54.5625V76.2272H77.2969ZM60.625 52.5H71.2344V70.2272H60.625V52.5Z"
                  fill="white"
                />
                <path
                  id="Vector_2"
                  d="M51.3566 6.32789C50.1334 5.21412 48.5225 4.61142 46.8607 4.6458C45.1989 4.68019 43.6149 5.34899 42.4398 6.51239L6.0625 42.5146V93H27.2812V63H39.4062V93H90.9375V42.3671L51.3566 6.32789ZM84.875 87H45.4688V57H21.2188V87H12.125V45L47.2519 10.7542V10.7437L84.875 45V87Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
          <p className="mt-4 text-white text-base leading-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page whenters.
          </p>
          <div className="flex gap-4 mt-10">
            <FooterIcon className="rounded-full border-[3px] border-white p-2">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="043-twitter">
                  <path
                    id="Vector"
                    d="M7.83443 18.2048C6.92633 18.2048 5.99162 18.1347 5.05131 17.9944C3.39515 17.7469 1.71864 16.9218 1.24424 16.6748L0 16.0269L1.3471 15.605C2.81965 15.1439 3.71542 14.8578 4.82428 14.4098C3.71398 13.8977 2.85827 12.9765 2.44635 11.7857L2.13296 10.8796L2.38995 10.917C2.14626 10.6831 1.95384 10.4457 1.80468 10.2298C1.2742 9.46241 0.993343 8.52476 1.0531 7.72123L1.11206 6.93037L1.60922 7.11378C1.39949 6.73658 1.24793 6.33375 1.15885 5.91154C0.941754 4.88187 1.12344 3.78797 1.67058 2.8314L2.10364 2.07426L2.68283 2.73679C4.51459 4.83244 6.83468 6.07557 9.58833 6.43949C9.47585 5.70112 9.56013 4.98853 9.83907 4.3498C10.1638 3.60609 10.7416 2.97544 11.5093 2.52592C12.362 2.0268 13.396 1.78495 14.4209 1.84492C15.5083 1.90855 16.4956 2.29658 17.2797 2.96781C17.6626 2.87305 17.9447 2.77189 18.3261 2.63517C18.5555 2.55293 18.8157 2.45954 19.1412 2.35273L20.3409 1.95905L19.5586 4.08704C19.6102 4.08292 19.6634 4.07941 19.719 4.07713L21.0001 4.02189L20.2429 5.00745C20.1995 5.06391 20.1884 5.07993 20.173 5.10206C20.112 5.18964 20.0361 5.29859 18.9967 6.62031C18.7365 6.95127 18.6066 7.38233 18.6308 7.8343C18.7229 9.55183 18.5017 11.1058 17.9728 12.4528C17.4726 13.7272 16.6975 14.8207 15.6692 15.7028C14.3967 16.7941 12.7742 17.5413 10.8465 17.9234C9.90091 18.1108 8.88546 18.2048 7.83443 18.2048Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4284_17">
                    <rect width="21" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </FooterIcon>
            <FooterIcon>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="021-facebook">
                  <path
                    id="Vector"
                    d="M17.9238 0H3.07617C1.38011 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.38011 20 3.07617 20H9.26953V12.9297H6.80859V9.41406H9.26953V7.03125C9.26953 5.09262 10.9254 3.51562 12.9609 3.51562H16.6934V7.03125H12.9609V9.41406H16.6934L16.0781 12.9297H12.9609V20H17.9238C19.6199 20 21 18.6856 21 17.0703V2.92969C21 1.31439 19.6199 0 17.9238 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4284_19">
                    <rect width="21" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </FooterIcon>
            <FooterIcon>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="025-instagram">
                  <path
                    id="Vector"
                    d="M17.9238 0H3.07617C1.38011 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.38011 20 3.07617 20H17.9238C19.6199 20 21 18.6856 21 17.0703V2.92969C21 1.31439 19.6199 0 17.9238 0ZM10.541 15.2344C7.48775 15.2344 5.00391 12.8688 5.00391 9.96094C5.00391 7.05307 7.48775 4.6875 10.541 4.6875C13.5943 4.6875 16.0781 7.05307 16.0781 9.96094C16.0781 12.8688 13.5943 15.2344 10.541 15.2344ZM16.6934 5.85938C15.6757 5.85938 14.8477 5.0708 14.8477 4.10156C14.8477 3.13232 15.6757 2.34375 16.6934 2.34375C17.7111 2.34375 18.5391 3.13232 18.5391 4.10156C18.5391 5.0708 17.7111 5.85938 16.6934 5.85938Z"
                    fill="white"
                  />
                  <path
                    id="Vector_2"
                    d="M16.6934 3.51562C16.3539 3.51562 16.0781 3.77823 16.0781 4.10156C16.0781 4.4249 16.3539 4.6875 16.6934 4.6875C17.0329 4.6875 17.3086 4.4249 17.3086 4.10156C17.3086 3.77823 17.0329 3.51562 16.6934 3.51562Z"
                    fill="white"
                  />
                  <path
                    id="Vector_3"
                    d="M10.541 5.85938C8.1666 5.85938 6.23438 7.69958 6.23438 9.96094C6.23438 12.2223 8.1666 14.0625 10.541 14.0625C12.9154 14.0625 14.8477 12.2223 14.8477 9.96094C14.8477 7.69958 12.9154 5.85938 10.541 5.85938Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4284_21">
                    <rect width="21" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </FooterIcon>
          </div>
        </div>
        <FooterList title="About Us">
          <li>About</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
          <li>Faq</li>
        </FooterList>
        <FooterList title="Navigate">
          <li>How We Work</li>
          <li>Services</li>
          <li>Faq</li>
          <li>Contact</li>
          <li>Free Quote</li>
        </FooterList>
        <FooterList title="Contact Us">
          <li>Calle Washington 1400</li>
          <li>Call: +52 81 1234 5678</li>
          <li>Email: info@bodeguitas.com</li>
          <li>
            <img src={whatsapp} alt="whatsapp" />
          </li>
        </FooterList>
      </div>
    </footer>
  );
};

export default Footer;
