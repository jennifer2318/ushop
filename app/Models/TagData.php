<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\TagData
 *
 * @property int $id
 * @property string $uid
 * @property string $title
 * @property string $title_ru
 * @property int $is_top
 * @property string $color
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|TagData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TagData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TagData query()
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereIsTop($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereTitleRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TagData whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class TagData extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags_data';
}
