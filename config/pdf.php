<?php

return [
    'mode'                  => 'utf-8',
    'format'                => 'A4',
    'author'                => '',
    'subject'               => '',
    'keywords'              => '',
    'creator'               => 'Laravel Pdf',
    'display_mode'          => 'fullpage',
    'tempDir'               => base_path('../temp/'),

    'margin_left'          => 5,
    'margin_right'         => 5,
    'margin_top'           => 5,
    'margin_bottom'        => 5,

    'font_path' => base_path('resources/fonts/'),
    'font_data' => [
        'tajawalfont' => [
            'R'  => 'Tajawal-Regular.ttf',    // regular font
            'B'  => 'Tajawal-Bold.ttf',       // optional: bold font
            'I'  => 'Tajawal-Italic.ttf',     // optional: italic font
            'BI' => 'Tajawal-Bold-Italic.ttf', // optional: bold-italic font
            'useOTL' => 0xFF,    // required for complicated langs like Persian, Arabic and Chinese
            'useKashida' => 75,  // required for complicated langs like Persian, Arabic and Chinese
        ]
    ]
];
