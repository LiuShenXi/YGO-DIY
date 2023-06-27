## 用户表（Users）

- id (UUID): 用户的唯一标识符。
- username (STRING): 用户的用户名，不允许为空，且唯一。
- password (STRING): 用户的密码，不允许为空。

## 卡牌表（Cards）

- id (UUID): 卡牌的唯一标识符。
- name (STRING): 卡牌的名称，不允许为空。
- star (INT): 卡牌的星级，不允许为空。
- illustration (STRING): 卡牌的插画。
- race (STRING): 卡牌的种族。
- effect (STRING): 卡牌的效果。
- attribute (STRING): 卡牌的属性。
- description (STRING): 卡牌的描述。

## 套牌表（Decks）

- id (UUID): 套牌的唯一标识符。
- name (STRING): 套牌的名称，不允许为空。
- user_id (UUID): 套牌的创建者的ID，不允许为空，为外键，关联用户表的id。

## 套牌卡牌关系表（DeckCards）

- id (UUID): 套牌卡牌关系的唯一标识符。
- deck_id (UUID): 套牌的ID，不允许为空，为外键，关-联套牌表的id。
- card_id (UUID): 卡牌的ID，不允许为空，为外键，关联卡牌表的id。

## 评分表（Ratings）

- id (UUID): 评分的唯一标识符。
- user_id (UUID): 评分所属的用户的ID，不允许为空，为外键，关联用户表的id。
- card_id (UUID): 被评分的卡牌的ID，不允许为空，为外键，关联卡牌表的id。
- score (INT): 用户对卡牌的评分，不允许为空，范围为0-10。

## 收藏表（Favorites）

- id (UUID): 收藏的唯一标识符。
- user_id (UUID): 收藏所属的用户的ID，不允许为空，为外键，关联用户表的id。
- card_id (UUID): 被收藏的卡牌的ID，不允许为空，为外键，关联卡牌表的id。

## 评论表（Comments）

- id (UUID): 评论的唯一标识符。
- user_id (UUID): 发表评论的用户的ID，不允许为空，为外键，关联用户表的id。
- card_id (UUID): 被评论的卡牌的ID，不允许为空，为外键，关联卡牌表的id。
- content (STRING): 评论的内容，不允许为空。
- timestamp (TIMESTAMP): 评论发表的时间。