<?php

header('Content-Type: application/json');

require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/OptionsRequestMapper.php';
require_once __DIR__ . '/ProductRequestMapper.php';
require_once __DIR__ . '/ProductLoadMoreMapper.php';

$task = isset($_GET['task']) ? $_GET['task'] : '';
if ($task=='') {
    return;
}

$api_base = 'http://avy.ru:557';
$curlOptions = array(
    CURLOPT_URL => $api_base,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_FOLLOWLOCATION => 1,
    CURLOPT_HTTPHEADER     => array(
        'Content-Type' => 'application/json'
    )
);

switch ($task) {
    case 'filterOptions':
        $ch = curl_init();

        $curlOptions[CURLOPT_POSTFIELDS] = json_encode(array(
            'task' => 'updateFilter',
            'props' => array(
                'url' => 'metallorukava_i_rukava_vysoko_davleniya',
            )
        ));

        curl_setopt_array($ch, $curlOptions);
        $data = curl_exec($ch);
        $json = json_decode($data, true);

        $res = OptionsRequestMapper::map($json, $api_base . '/public');

        echo json_encode($res);

        break;
    case 'getProducts':
        $ch = curl_init();

        $requestParams = json_decode(file_get_contents('php://input'), true);
        $apiRequestParams = array(
            'task' => 'updateFilter',
            'props' => array(
                'url' => 'metallorukava_i_rukava_vysoko_davleniya',
                'view' => array(
                    'pagetitle',
                    'price',
                    'stock_count',
                    'ending1',
                    'ending2',
                    'numberOfBraids',
                    'dn',
                    'cable',
                    'protectiveSpiral',
                    'thermalInsulation',
                    'degreasing',
                    'outerCoating',
                    'bending_radius',
                    'max_pressure',
                    'os_compatibility',
                )
            )
        );

        if (!empty($requestParams['type1_size'])){
            $apiRequestParams['props']['ending1'] = implode(', ', $requestParams['type1_size']);
        }

        if (!empty($requestParams['type2_size'])){
            $apiRequestParams['props']['ending2'] = implode(', ', $requestParams['type2_size']);
        }

        if (isset($requestParams['length'])){
            $apiRequestParams['props']['_length'] = $requestParams['length'];
        }

        if (isset($requestParams['oxygen_compatibility'])){
            $apiRequestParams['props']['os_compatibility'] = $requestParams['oxygen_compatibility'];
        }

        if (isset($requestParams['cable'])){
            $apiRequestParams['props']['cable'] = $requestParams['cable'];
        }

        $curlOptions[CURLOPT_POSTFIELDS] = json_encode($apiRequestParams);

        curl_setopt_array($ch, $curlOptions);
        $data = curl_exec($ch);
        $json = json_decode($data, true);

        $p = array(
            'mrk_show' => $requestParams['mrk_show'],
            'rvd_show' => $requestParams['rvd_show'],
            'length' => $requestParams['length'],
        );
        $res = ProductRequestMapper::map($json, $p);

        echo json_encode($res);

        break;

    case 'loadMore':
        $ch = curl_init();

        $requestParams = json_decode(file_get_contents('php://input'), true);
        $apiRequestParams = array(
            'task' => 'updateTable',
            'props' => array(
                'url' => 'metallorukava_i_rukava_vysoko_davleniya',
                "SeriaId" => "",
                "tableId" => $requestParams['tableId'],
                "offset" => $requestParams['offset'],
                "limit" => $requestParams['limit'],
                "level" => 0,
                'filter' => array(
                    'view' => array(
                        'pagetitle',
                        'price',
                        'stock_count',
                        'ending1',
                        'ending2',
                        'numberOfBraids',
                        'dn',
                        'cable',
                        'protectiveSpiral',
                        'thermalInsulation',
                        'degreasing',
                        'outerCoating',
                        'bending_radius',
                        'max_pressure',
                        'os_compatibility',
                    )
                ),
            )
        );

        if (!empty($requestParams['type1_size'])){
            $apiRequestParams['props']['filter']['ending1'] = $requestParams['type1_size'];
        }

        if (!empty($requestParams['type2_size'])){
            $apiRequestParams['props']['filter']['ending2'] = $requestParams['type2_size'];
        }

        if (isset($requestParams['length'])){
            $apiRequestParams['props']['filter']['_length'] = $requestParams['length'];
        }

        if (isset($requestParams['oxygen_compatibility'])){
            $apiRequestParams['props']['filter']['os_compatibility'] = array($requestParams['oxygen_compatibility']);
        }

        if (isset($requestParams['cable'])){
            $apiRequestParams['props']['filter']['cable'] = array($requestParams['cable']);
        }

        $curlOptions[CURLOPT_POSTFIELDS] = json_encode($apiRequestParams);

        curl_setopt_array($ch, $curlOptions);
        $data = curl_exec($ch);
        $json = json_decode($data, true);

        $res = ProductLoadMoreMapper::map($json);

        echo json_encode($res);

        break;
}
