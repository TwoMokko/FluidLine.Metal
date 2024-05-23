<?php

class OptionsRequestMapper
{
    
    public static function map($options, $img_base)
    {
        $res = array(
            'types' => array(),
            'oxygen_compatibility_value' => $options['filter']['filter']['os_compatibility']['data'][0],
            'cable_value' => $options['filter']['filter']['cable']['data'][0],
        );
        
        foreach ($options['filter']['recources']['ending'] as $ending){
            
            $type = $ending['type'];
            if (!isset($res['types'][$type])){
                $res['types'][$type] = array(
                    'id' => $ending['id'],
                    'description' => $ending['description'],
                    'img_href' => $img_base . $ending['image'],
                    'sizes' => new stdClass()
                );
            }

            $res['types'][$type]['sizes']->$ending['id'] = $ending['size'];
        }
        
        return $res;
    }

}