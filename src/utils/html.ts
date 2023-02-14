import { Semester } from "./settings";
import { TSchoolRegistrationForm } from "./types";

export const SchoolRegistrationFormBody = (data: TSchoolRegistrationForm) => {
	return `<h2 class="title-form">ĐĂNG KÝ TRƯỜNG HỌC</h2>
    <div class="form-container">
        <table>
            <tr>
                <td class="name">
                    Họ & tên:
                </td>
                <td class="info-name">
                    ${data.name}
                </td>
            </tr>
            <tr>
                <td class="email">
                    Email:
                </td>
                <td class="info-email">
                    ${data.email}
                </td>
            </tr>
            <tr>
                <td class="phone">
                    Số điện thoại:
                </td>
                <td class="info-phone">
                    ${data.phone}
                </td>
            </tr>
            <tr>
                <td class="institution-type-school">
                    Chương trình học:
                </td>
                <td class="info-institution-type-school">
                    ${data.institutionTypeSchool}
                </td>
            </tr>
            <tr>
                <td class="semester">
                    Kì nhập học:
                </td>
                <td class="info-semester">
                    ${data.semester.semesterFirst ? `${Semester.FIRST},` : ""}
                    ${data.semester.semesterSecond ? `${Semester.SECOND},` : ""}
                    ${data.semester.semesterThird ? `${Semester.THIRD},` : ""}
                    ${data.semester.semesterFourth ? `${Semester.FOURTH},` : ""}
                </td>
            </tr>
            ${
				data.major
					? `<tr>
                            <td class="major">
                                Ngành học và ghi chú:
                            </td>
                            <td class="info-major">
                                ${data.major}
                            </td>
                        </tr>`
					: ``
			}
            
        </table>
    </div>`;
};

export default (body: string) => {
	return `<!DOCTYPE html>
    <html>
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }
            .title-form {
                text-align: center;
                font-weight: 700;
                font-size: 36px;
                text-transform: uppercase;
                color: rgb(206, 56, 50);
            }
            .form-container {
                border-style: dashed;
                border-width: 1px;
                border-color: rgb(206, 56, 50);
                max-width: 500px;
                margin: auto;
                display: grid;
                padding: 16px;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
            }
            .form-container tr {
                padding: 4px;
            }
        </style>
    </head>
    <body>
        ${body}
    </body>
    </html>`;
};
