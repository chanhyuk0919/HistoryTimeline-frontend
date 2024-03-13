import React from "react";

function Footer(props) {
    const fontColor = "#0d0d0d"; // 글씨
    return (
        <div
            className="container"
            style={{
                margin: 0,
                maxWidth: "100%",
                position: "fixed",
                bottom: "10px",
                right: "20px",
            }}
        >
            <div className="row">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{
                                color: fontColor,
                                paddingRight: "0px",
                                fontSize: "16pt",
                            }}
                        >
                            제보하기
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
