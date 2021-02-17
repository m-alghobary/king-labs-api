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
                        <h3 style="text-align: center">سند قبض</h3>
                    </td>
                    <td style="text-align: left; padding-bottom: 1rem">
                        <img src="{{ asset('/img/logo.jpg') }}" width="220" alt="" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>رقم السند: ({{ $invoiceId }})</p>
                    </td>
                    <td></td>
                    <td style="text-align: left">
                        <p>التأريخ: {{ date('Y/m/d') }}</p>
                    </td>
                </tr>
                @foreach ($agents as $agent)
                    <tr>
                        <td style="border: none">
                            <p>اسم العميل: {{ $agent['name'] }}</p>
                        </td>
                        <td style="border: none"></td>
                        <td style="text-align: left; border: none">
                            <p>نوع التأشيرة: {{ $agent['travel_type'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>رقم الجواز: {{ $agent['identity_number'] }}</p>
                        </td>
                        <td></td>
                        <td style="text-align: left">
                            <p>اسم الفحص: {{ $agent['test'][0]->name }}</p>
                        </td>
                    </tr>
                @endforeach
                <tr>
                    <td>
                        <p>المبلغ المستلم: {{ $amount }} ريال</p>
                    </td>
                    <td></td>
                    <td style="text-align: left">
                        <p>المبلغ المتبقي: {{ $remain }} ريال</p>
                    </td>
                </tr>
                <tr>
                    <td style="border: none"></td>
                    <td style="border: none"></td>
                    <td style="text-align: left; border: none">
                        <p>الموظف المختص: {{ $user }}</p>
                    </td>
                </tr>
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
    </div>
</body>

</html>
