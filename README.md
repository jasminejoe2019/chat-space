## usersテーブル

|Column|Type|Options|
|------|----|-------|
|Name|integer|null: false, foreign_key: true|
|Email|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|Name|integer|null: false, foreign_key: true|
|Email|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups

