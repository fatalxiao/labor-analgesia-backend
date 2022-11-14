SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for analgesia_data
-- ----------------------------
DROP TABLE IF EXISTS `analgesia_data`;
CREATE TABLE `analgesia_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` varchar(10) DEFAULT NULL COMMENT '孕妇住院号',
  `time_point` int DEFAULT NULL COMMENT '时间点',
  `vas_score` float DEFAULT NULL COMMENT 'VAS评分',
  `thoracic_sensory_block_left_value` int DEFAULT NULL COMMENT '左侧最高阻滞平面',
  `thoracic_sensory_block_right_value` int DEFAULT NULL COMMENT '右侧最高阻滞平面',
  `sacral_sensory_block_left_value` int DEFAULT NULL COMMENT '左侧最低阻滞平面',
  `sacral_sensory_block_right_value` int DEFAULT NULL COMMENT '右侧最低阻滞平面',
  `bromage_score` int DEFAULT NULL COMMENT 'Bromage评分',
  `systolic_blood_pressure` int DEFAULT NULL COMMENT '收缩压',
  `diastolic_blood_pressure` int DEFAULT NULL COMMENT '舒张压',
  `heart_rate` int DEFAULT NULL COMMENT '心率',
  `fetal_heart_rate` int DEFAULT NULL COMMENT '胎心率',
  `ctime` datetime DEFAULT NULL,
  `utime` datetime DEFAULT NULL,
  `dtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `analgesia_data_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='麻醉数据';

-- ----------------------------
-- Records of analgesia_data
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
