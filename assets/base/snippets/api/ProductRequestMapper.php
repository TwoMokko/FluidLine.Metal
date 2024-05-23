<?php

class ProductRequestMapper
{
    
    public static function map($options, $params){
        $res = array(
            'rkv' => array(
                'products' => array(),
                'count_all' => 0,
                'table_id' => 0,
            ),
            'mrk' => array(
                'products' => array(),
                'count_all' => 0,
                'table_id' => 0,
            ),
        );
        
        foreach ($options['table']['levels'][0] as $val){
            
            if ($val['title'] === 'Металлорукав' && $params['mrk_show']){
                foreach ($val['tables'] as $tableId => $table){
                    $res['mrk']['count_all'] = $table['length'];
                    $res['mrk']['table_id'] = $tableId;

                    $res['mrk']['products'] = $table['rows'];
                }
            } 
            
            if ($val['title'] === 'Рукав высокого давления' && $params['rvd_show']){
                foreach ($val['tables'] as $tableId => $table){
                    $res['rkv']['count_all'] = $table['length'];
                    $res['rkv']['table_id'] = $tableId;

                    $res['rkv']['products'] = $table['rows'];
                }
            }
        }

        return $res;
    }

}