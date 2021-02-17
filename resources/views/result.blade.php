<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>
    <link rel="stylesheet" href="{{ asset('css/invoice.css') }}">
</head>

<body style="background-image: url( {{ asset('/img/logo_alpa.png') }})">
    <div class="main">
        <table style="min-width: 100%; border-collapse: collapse;">
            <tbody>
                <tr>
                    <td>
                        <div class="title">
                            <h3 class="ar" style="margin-bottom: 16px">مختبر كينغ لاب التشخيصي</h3>
                            <br>
                            <h3 class="en">King Diagnostic Lab</h3>
                        </div>
                    </td>
                    <td>
                    </td>
                    <td style="text-align: left; padding-bottom: 1rem">
                        <img src="{{ asset('/img/logo.jpg') }}" width="220" alt="" />
                    </td>
                </tr>

            </tbody>
        </table>
        <table class="result">
            <tbody>
                <tr>
                    <td rowspan="3" style="background-color: #ccc">Patient Data</td>
                    <td>Name</td>
                    <td>{{ $data->name }}</td>
                    <td>Age</td>
                    <td>{{ $data->age }}</td>
                </tr>
                <tr>
                    <td>Sex</td>
                    <td>{{ $data->gender ? 'Mail' : 'Femail' }}</td>
                    <td>PASSPORT NO</td>
                    <td colspan="2">{{ $data->identity_number }}</td>
                </tr>
                <tr>
                    <td>Time collection</td>
                    <td>{{ Carbon\Carbon::parse($data->date_collect)->format('Y/m/d') }}</td>
                    <td>Time received</td>
                    <td colspan="2">{{ date('Y/m/d') }}</td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                </tr>
                <tr style="border-top: 1px solid #333">
                    <td style="background-color: #ccc">COVID-19 PCR TEST</td>
                    <td colspan="4">
                        {{ $data->result === 'Positive' ? 'Detected (Positive)' : 'Not Detected (Negative)' }}
                    </td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                </tr>
                <tr style="border-top: 1px solid #333">
                    <td style="background-color: #ccc">PCR Processing</td>
                    <td colspan="4">
                        <ol style="margin: 0">
                            <li>RNA was extracting using automated nuclelc Acid Extracting System.</li>
                            <li>Extracting RNA was Apmlified using real Time PCR kit for detection of COVID-19.</li>
                            <li>The test is curried out by using real time PCR (Trademark of BIO-RADCFX96).</li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                </tr>
                <tr style="border-top: 1px solid #333">
                    <td style="background-color: #ccc">PCR Interpretion</td>
                    <td colspan="4">
                        <ol style="margin: 0">
                            <li>This Assay is quantitative detection of COVID-19 virus.</li>
                            <li>Both positive and negative control for the tested virus showed expected result,
                                excluding false positive result.</li>
                            <li>Not detected result may not rule out current or future infection, please correlate with
                                clinical finding.</li>
                            <li>Lower respiratory sample is recommended in sever and progressive disease.</li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                </tr>
                <tr style="border-top: 1px solid #333">
                    <td style="background-color: #ccc">Lab authority</td>
                    <td colspan="3">
                        {{ date('Y/m/d') }}
                    </td>
                    <td>
                        {{ $user }}
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>

                <tr>
                    <td colspan="3">
                        <img src="{{ asset('/img/logo.jpg') }}" width="120" alt="" />
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem">
                        <hr>
                    </td>
                    <td style="padding: 0.5rem">
                        <p style="text-align: center; white-space: nowrap">عدن - المنصورة</p>
                    </td>
                    <td style="padding: 0.5rem">
                        <hr>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="margin-top: 20px">
            {{ QrCode::generate($user) }}
        </div>
    </div>
</body>

</html>
