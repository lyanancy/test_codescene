// source: enum.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.EnumDeckStatus', null, global);
goog.exportSymbol('proto.proto.EnumTest', null, global);
/**
 * @enum {number}
 */
proto.proto.EnumTest = {
  TEST_NONE: 0,
  TEST_GO: 1,
  TEST_STAY: 2
};

/**
 * @enum {number}
 */
proto.proto.EnumDeckStatus = {
  DECK_STATUS_NONE: 0,
  DECK_STATUS_EMPTY: 1,
  DECK_STATUS_WAIT: 2,
  DECK_STATUS_GOING: 3,
  DECK_STATUS_BEGIN_WAR: 4
};

goog.object.extend(exports, proto.proto);
