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
                        <h3 style="text-align: center"> ملخص مالي حسب الفرع</h3>
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
                    <th>عدد الفحوصات</th>
                    <th>اجمالي المبلغ</th>
                    <th>اجمالي الخصم</th>
                    <th>عمولة الوكيل</th>
                    <th>صافي التوريد</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data['branches'] as $branch)
                    <tr>
                        <td>{{ $branch['id'] }}</td>
                        <td>{{ $branch['name'] }}</td>
                        <td>{{ $branch['invoices_count'] }}</td>
                        <td>{{ $branch['total_amount'] }}</td>
                        <td>{{ $branch['discount'] }}</td>
                        <td>{{ $branch['fee'] }}</td>
                        <td>{{ $branch['net'] }}</td>
                    </tr>
                @endforeach
                <tr style="background-color: rgba(151, 201, 229, 0.2)">
                    <td>الاجمالي</td>
                    <td></td>
                    <td>{{ $data['totals']['invoices'] }}</td>
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
