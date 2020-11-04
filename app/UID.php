<?php


namespace App;


class UID
{
    private static $numberPattern = '0123456789';
    private static $stringPattern = 'abcdefghijklmnopqrstuvwxyz';
    private static $liqPattern = 'abcdefgjklmnopqrstxyuz0123456789';

    /**
    * @param string $pattern
    * @return string
    */
    public static function generatePattern(string $pattern): string
    {
        $str = '';
        for ($i = 0; $i < 6; $i++) {
            $str .= $pattern[rand(0, mb_strlen($pattern)-1)];
        }
        return $str;
    }

    /**
     * @return string
     */
    public static function createUID(): string
    {
        return '{' . self::generatePattern(self::$liqPattern) . '-' . self::generatePattern(self::$stringPattern) . '-' . self::generatePattern(self::$liqPattern) . '-' . self::generatePattern(self::$numberPattern) . '-' . self::generatePattern(self::$stringPattern) . '}';
    }

}
