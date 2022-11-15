SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for observal_data
-- ----------------------------
DROP TABLE IF EXISTS `observal_data`;
CREATE TABLE `observal_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` varchar(10) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '孕妇住院号',
  `ep_placement_point_id` int DEFAULT NULL COMMENT '硬膜外穿刺点位置',
  `observal_end_point_id` int DEFAULT NULL COMMENT '观察终点',
  `cervix_fully_dilated_time` varchar(8) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '宫口开全时间',
  `cervix_dilatation` int DEFAULT NULL COMMENT '宫颈扩张度',
  `initial_time` varchar(8) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '麻醉开始时间',
  `initial_dose` int DEFAULT NULL COMMENT '负荷剂量(ml)',
  `pump_consumption` int DEFAULT NULL COMMENT '泵消耗(ml)',
  `bolus` int DEFAULT NULL COMMENT '人工负荷量(ml)',
  `pca_count` int DEFAULT NULL COMMENT 'PCA次数',
  `manual_bolus_count` int DEFAULT NULL COMMENT '人工硬膜外追加次数',
  `first_pca_time` varchar(8) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '首次PCA时间',
  `has_vasoactive_agent` tinyint(1) DEFAULT '0' COMMENT '是否使用血管活性药物',
  `first_manual_bolus_time` varchar(8) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '首次人工硬膜外追加时间',
  `has_hypotension` tinyint(1) DEFAULT '0' COMMENT '是否有血压过低',
  `has_caesarean_section` tinyint(1) DEFAULT '0' COMMENT '是否有剖宫产',
  `has_instrumental` tinyint(1) DEFAULT '0' COMMENT '是否有器械助产',
  `has_pruritus` tinyint(1) DEFAULT NULL COMMENT '是否瘙痒',
  `has_lateral_episiotomy` tinyint(1) DEFAULT '0' COMMENT '是否有侧切',
  `birth_time` varchar(8) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '分娩时间',
  `foetal_weight` int DEFAULT NULL COMMENT '胎儿体重',
  `one_minute_apgar_score` int DEFAULT NULL COMMENT '1分钟APGAR评分',
  `five_minute_apgar_score` int DEFAULT NULL COMMENT '5分钟APGAR评分',
  `description` varchar(1000) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '备注',
  `ctime` datetime DEFAULT NULL,
  `utime` datetime DEFAULT NULL,
  `dtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `observal_data_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='观察数据';

-- ----------------------------
-- Records of observal_data
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
