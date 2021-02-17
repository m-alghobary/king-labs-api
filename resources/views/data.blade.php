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
                        <h3 style="text-align: center">تقرير مالي تفصيلي</h3>
                    </td>
                    <td style="text-align: left; padding-bottom: 1rem">
                        <img src="{{ asset('/img/logo.jpg') }}" width="220" alt="" />
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>الرقم</th>
                    <th>اسم الفرع</th>
                    <th>التأريخ</th>
                    <th>اسم العميل</th>
                    <th>رقم الجواز</th>
                    <th>اجمالي المبلغ</th>
                    <th>اجمالي الخصم</th>
                    <th>عمولة الوكيل</th>
                    <th>صافي التوريد</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data['agents'] as $agent)
                    <tr style="{{ $agent['duplicate'] ? 'background-color: rgba(229, 151, 164, 0.2)' : '' }}">
                        <td>{{ $agent['id'] }}</td>
                        <td>{{ $agent['barnch'] }}</td>
                        <td>{{ $agent['date'] }}</td>
                        <td>{{ $agent['agent'] }}</td>
                        <td>{{ $agent['identityNo'] }}</td>
                        <td>{{ $agent['amount'] }}</td>
                        <td>{{ $agent['discount'] }}</td>
                        <td>{{ $agent['fee'] }}</td>
                        <td>{{ $agent['amount'] - $agent['discount'] - $agent['fee'] }}</td>
                    </tr>
                @endforeach
                <tr style="background-color: rgba(151, 201, 229, 0.2)">
                    <td>الاجمالي</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ $data['totals']['amount'] }}</td>
                    <td>{{ $data['totals']['discount'] }}</td>
                    <td>{{ $data['totals']['fee'] }}</td>
                    <td>{{ $data['totals']['net'] }}</td>
                </tr>
            </tbody>
        </table>
        <br>
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
    </div>
</body>

</html>
