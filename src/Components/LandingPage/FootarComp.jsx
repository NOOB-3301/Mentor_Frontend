import React from 'react'
const FootarComp = () => {
  return (
    <>
            <footer
            className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-white max-md:flex-col"
        >
            <div
                className="flex h-full w-[250px] flex-col place-items-center gap-6 max-md:w-full"
            >
                <img
                    src="../../assets/logo/logo.png"
                    alt="logo"
                    srcset=""
                    className="max-w-[120px]"
                />
                <div>
                    2 Lord Edward St,
                    <br />
                    D02 P634,
                    <br />
                    United States
                </div>
                <div className="mt-3 text-lg font-semibold">Follow us</div>
                <div className="flex gap-4 text-2xl">
                    <a href="" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com/@pauls_freeman"
                        aria-label="Twitter"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com/"
                        className="h-[40px] w-[40px]"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="flex h-full w-[250px] flex-col gap-4">
                <h2 className="text-3xl max-md:text-xl">Resources</h2>
                <div className="flex flex-col gap-3 max-md:text-sm">
                    <a href="" className="footer-link">About us</a>
                    <a href="" className="footer-link">FAQ</a>
                    <a href="" className="footer-link">Contact Us</a>
                    <a href="" className="footer-link">Blogs</a>
                    <a href="" className="footer-link">Privacy policy</a>
                </div>
            </div>
        </footer>
    </>
)
}

export default FootarComp