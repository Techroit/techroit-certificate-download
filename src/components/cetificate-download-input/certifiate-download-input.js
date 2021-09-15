import React, { useState, useRef } from 'react';
import "./certificate-download.scss";

function CertificateDownloadInput() {

    const CERTIFICATE_BASE_URL = "https://techroit.sgp1.cdn.digitaloceanspaces.com/cgnx2548/"
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState(false);
    let downloadURL = useRef("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setMessage({});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const fetchURL = CERTIFICATE_BASE_URL + email.toString() + ".png";
        setLoading(true);
        fetch(fetchURL)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                } else {
                    return false;
                }
            })
            .then(data => {
                setLoading(false);
                if (data) {
                    let image = new Blob([data], {
                        type: "image/png"
                    });
                    const imageObjectURL = URL.createObjectURL(image);
                    // debugger;
                    downloadURL.current = imageObjectURL;
                    setMessage({ message: "Your certificate is ready. Please click the download button.", error: false });
                    setValid(true);
                } else {
                    setMessage({ message: "Sorry, no certificate records found! Please try again later.", error: true });
                }
            });
    }

    return (
        <form className="cmp-certificate-download" onSubmit={handleFormSubmit}>
            <div className="cmp-certificate-download__input-group">
                <input className="cmp-certificate-download__input" type="email" placeholder="Your Email" value={email} onChange={handleEmailChange}></input>
                {
                    !valid && !loading &&
                    <input type="submit" className="cmp-certificate-download__button" value="Validate"></input>
                }
                {
                    valid && !loading &&
                    <a className="cmp-certificate-download__button" href={downloadURL.current} download>Download</a>
                }
                {
                    loading &&
                    <input type="submit" disabled className="cmp-certificate-download__button" value="Please Wait..."></input>
                }
                <br />
            </div>
            <p className={"cmp-certificate-download__msg " + (message?.error ? "cmp-certificate-download__msg--error" : "")}>{message?.message}</p>
        </form>
    );
}

export default CertificateDownloadInput;