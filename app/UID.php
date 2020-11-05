<?php


namespace App;


class UID
{
    private static $numberPattern = '0123456789';
    private static $stringPattern = 'abcdefghijklmnopqrstuvwxyz';
    private static $liqPattern = 'abcdefgjklmnopqrstxyuz0123456789';

    /**
     * @param string $pattern
     * @param int $length
     * @return string
     */
    public static function generatePattern(string $pattern, int $length = 8 ): string
    {
        $str = '';
        for ($i = 0; $i < $length; $i++) {
            $str .= $pattern[rand(0, mb_strlen($pattern)-1)];
        }
        return $str;
    }

    /**
     * @return string
     */
    public static function createUID(): string
    {
        return '{' . self::generatePattern(self::$liqPattern) . '-' . self::generatePattern(self::$numberPattern, 4) . '-' . self::generatePattern(self::$liqPattern, 4) . '-' . self::generatePattern(self::$liqPattern, 4) . '-' . self::generatePattern(self::$liqPattern) . '}';
    }

}
