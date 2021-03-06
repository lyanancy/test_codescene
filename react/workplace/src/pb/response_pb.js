// source: response.proto
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

var object_pb = require('./object_pb.js');
goog.object.extend(proto, object_pb);
goog.exportSymbol('proto.proto.Response_Field_Atk_Decks', null, global);
goog.exportSymbol('proto.proto.Response_Field_Information', null, global);
goog.exportSymbol('proto.proto.Response_Field_Move_Deck', null, global);
goog.exportSymbol('proto.proto.Response_Frame', null, global);
goog.exportSymbol('proto.proto.Response_Set_Field_Move_Deck', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Response_Field_Information = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Response_Field_Information.repeatedFields_, null);
};
goog.inherits(proto.proto.Response_Field_Information, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response_Field_Information.displayName = 'proto.proto.Response_Field_Information';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Response_Field_Move_Deck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Response_Field_Move_Deck.repeatedFields_, null);
};
goog.inherits(proto.proto.Response_Field_Move_Deck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response_Field_Move_Deck.displayName = 'proto.proto.Response_Field_Move_Deck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Response_Set_Field_Move_Deck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Response_Set_Field_Move_Deck.repeatedFields_, null);
};
goog.inherits(proto.proto.Response_Set_Field_Move_Deck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response_Set_Field_Move_Deck.displayName = 'proto.proto.Response_Set_Field_Move_Deck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Response_Frame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Response_Frame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response_Frame.displayName = 'proto.proto.Response_Frame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Response_Field_Atk_Decks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Response_Field_Atk_Decks.repeatedFields_, null);
};
goog.inherits(proto.proto.Response_Field_Atk_Decks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Response_Field_Atk_Decks.displayName = 'proto.proto.Response_Field_Atk_Decks';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Response_Field_Information.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Response_Field_Information.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response_Field_Information.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response_Field_Information} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Information.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldDecksList: jspb.Message.toObjectList(msg.getFieldDecksList(),
    object_pb.FieldDeck.toObject, includeInstance),
    fieldBastionsList: jspb.Message.toObjectList(msg.getFieldBastionsList(),
    object_pb.FieldBastion.toObject, includeInstance),
    frame: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Response_Field_Information}
 */
proto.proto.Response_Field_Information.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response_Field_Information;
  return proto.proto.Response_Field_Information.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response_Field_Information} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response_Field_Information}
 */
proto.proto.Response_Field_Information.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new object_pb.FieldDeck;
      reader.readMessage(value,object_pb.FieldDeck.deserializeBinaryFromReader);
      msg.addFieldDecks(value);
      break;
    case 2:
      var value = new object_pb.FieldBastion;
      reader.readMessage(value,object_pb.FieldBastion.deserializeBinaryFromReader);
      msg.addFieldBastions(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Response_Field_Information.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response_Field_Information.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response_Field_Information} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Information.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldDecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      object_pb.FieldDeck.serializeBinaryToWriter
    );
  }
  f = message.getFieldBastionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      object_pb.FieldBastion.serializeBinaryToWriter
    );
  }
  f = message.getFrame();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated FieldDeck field_decks = 1;
 * @return {!Array<!proto.proto.FieldDeck>}
 */
proto.proto.Response_Field_Information.prototype.getFieldDecksList = function() {
  return /** @type{!Array<!proto.proto.FieldDeck>} */ (
    jspb.Message.getRepeatedWrapperField(this, object_pb.FieldDeck, 1));
};


/**
 * @param {!Array<!proto.proto.FieldDeck>} value
 * @return {!proto.proto.Response_Field_Information} returns this
*/
proto.proto.Response_Field_Information.prototype.setFieldDecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.FieldDeck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.FieldDeck}
 */
proto.proto.Response_Field_Information.prototype.addFieldDecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.FieldDeck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Response_Field_Information} returns this
 */
proto.proto.Response_Field_Information.prototype.clearFieldDecksList = function() {
  return this.setFieldDecksList([]);
};


/**
 * repeated FieldBastion field_bastions = 2;
 * @return {!Array<!proto.proto.FieldBastion>}
 */
proto.proto.Response_Field_Information.prototype.getFieldBastionsList = function() {
  return /** @type{!Array<!proto.proto.FieldBastion>} */ (
    jspb.Message.getRepeatedWrapperField(this, object_pb.FieldBastion, 2));
};


/**
 * @param {!Array<!proto.proto.FieldBastion>} value
 * @return {!proto.proto.Response_Field_Information} returns this
*/
proto.proto.Response_Field_Information.prototype.setFieldBastionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.FieldBastion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.FieldBastion}
 */
proto.proto.Response_Field_Information.prototype.addFieldBastions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.FieldBastion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Response_Field_Information} returns this
 */
proto.proto.Response_Field_Information.prototype.clearFieldBastionsList = function() {
  return this.setFieldBastionsList([]);
};


/**
 * optional int64 frame = 3;
 * @return {number}
 */
proto.proto.Response_Field_Information.prototype.getFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Field_Information} returns this
 */
proto.proto.Response_Field_Information.prototype.setFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Response_Field_Move_Deck.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Response_Field_Move_Deck.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response_Field_Move_Deck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response_Field_Move_Deck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Move_Deck.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldDecksList: jspb.Message.toObjectList(msg.getFieldDecksList(),
    object_pb.FieldDeck.toObject, includeInstance),
    frame: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Response_Field_Move_Deck}
 */
proto.proto.Response_Field_Move_Deck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response_Field_Move_Deck;
  return proto.proto.Response_Field_Move_Deck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response_Field_Move_Deck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response_Field_Move_Deck}
 */
proto.proto.Response_Field_Move_Deck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new object_pb.FieldDeck;
      reader.readMessage(value,object_pb.FieldDeck.deserializeBinaryFromReader);
      msg.addFieldDecks(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Response_Field_Move_Deck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response_Field_Move_Deck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response_Field_Move_Deck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Move_Deck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldDecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      object_pb.FieldDeck.serializeBinaryToWriter
    );
  }
  f = message.getFrame();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated FieldDeck field_decks = 1;
 * @return {!Array<!proto.proto.FieldDeck>}
 */
proto.proto.Response_Field_Move_Deck.prototype.getFieldDecksList = function() {
  return /** @type{!Array<!proto.proto.FieldDeck>} */ (
    jspb.Message.getRepeatedWrapperField(this, object_pb.FieldDeck, 1));
};


/**
 * @param {!Array<!proto.proto.FieldDeck>} value
 * @return {!proto.proto.Response_Field_Move_Deck} returns this
*/
proto.proto.Response_Field_Move_Deck.prototype.setFieldDecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.FieldDeck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.FieldDeck}
 */
proto.proto.Response_Field_Move_Deck.prototype.addFieldDecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.FieldDeck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Response_Field_Move_Deck} returns this
 */
proto.proto.Response_Field_Move_Deck.prototype.clearFieldDecksList = function() {
  return this.setFieldDecksList([]);
};


/**
 * optional int64 frame = 2;
 * @return {number}
 */
proto.proto.Response_Field_Move_Deck.prototype.getFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Field_Move_Deck} returns this
 */
proto.proto.Response_Field_Move_Deck.prototype.setFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Response_Set_Field_Move_Deck.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response_Set_Field_Move_Deck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response_Set_Field_Move_Deck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Set_Field_Move_Deck.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldDeckTosList: jspb.Message.toObjectList(msg.getFieldDeckTosList(),
    object_pb.FieldDeckTo.toObject, includeInstance),
    frame: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Response_Set_Field_Move_Deck}
 */
proto.proto.Response_Set_Field_Move_Deck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response_Set_Field_Move_Deck;
  return proto.proto.Response_Set_Field_Move_Deck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response_Set_Field_Move_Deck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response_Set_Field_Move_Deck}
 */
proto.proto.Response_Set_Field_Move_Deck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new object_pb.FieldDeckTo;
      reader.readMessage(value,object_pb.FieldDeckTo.deserializeBinaryFromReader);
      msg.addFieldDeckTos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response_Set_Field_Move_Deck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response_Set_Field_Move_Deck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Set_Field_Move_Deck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldDeckTosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      object_pb.FieldDeckTo.serializeBinaryToWriter
    );
  }
  f = message.getFrame();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated FieldDeckTo field_deck_tos = 1;
 * @return {!Array<!proto.proto.FieldDeckTo>}
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.getFieldDeckTosList = function() {
  return /** @type{!Array<!proto.proto.FieldDeckTo>} */ (
    jspb.Message.getRepeatedWrapperField(this, object_pb.FieldDeckTo, 1));
};


/**
 * @param {!Array<!proto.proto.FieldDeckTo>} value
 * @return {!proto.proto.Response_Set_Field_Move_Deck} returns this
*/
proto.proto.Response_Set_Field_Move_Deck.prototype.setFieldDeckTosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.FieldDeckTo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.FieldDeckTo}
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.addFieldDeckTos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.FieldDeckTo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Response_Set_Field_Move_Deck} returns this
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.clearFieldDeckTosList = function() {
  return this.setFieldDeckTosList([]);
};


/**
 * optional int64 frame = 2;
 * @return {number}
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.getFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Set_Field_Move_Deck} returns this
 */
proto.proto.Response_Set_Field_Move_Deck.prototype.setFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Response_Frame.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response_Frame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response_Frame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Frame.toObject = function(includeInstance, msg) {
  var f, obj = {
    frame: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Response_Frame}
 */
proto.proto.Response_Frame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response_Frame;
  return proto.proto.Response_Frame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response_Frame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response_Frame}
 */
proto.proto.Response_Frame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrame(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Response_Frame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response_Frame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response_Frame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Frame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrame();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 frame = 1;
 * @return {number}
 */
proto.proto.Response_Frame.prototype.getFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Frame} returns this
 */
proto.proto.Response_Frame.prototype.setFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.proto.Response_Frame.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Frame} returns this
 */
proto.proto.Response_Frame.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Response_Field_Atk_Decks.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Response_Field_Atk_Decks.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Response_Field_Atk_Decks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Response_Field_Atk_Decks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Atk_Decks.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldAtkDecksList: jspb.Message.toObjectList(msg.getFieldAtkDecksList(),
    object_pb.FieldAtkDeck.toObject, includeInstance),
    frame: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Response_Field_Atk_Decks}
 */
proto.proto.Response_Field_Atk_Decks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Response_Field_Atk_Decks;
  return proto.proto.Response_Field_Atk_Decks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Response_Field_Atk_Decks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Response_Field_Atk_Decks}
 */
proto.proto.Response_Field_Atk_Decks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new object_pb.FieldAtkDeck;
      reader.readMessage(value,object_pb.FieldAtkDeck.deserializeBinaryFromReader);
      msg.addFieldAtkDecks(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Response_Field_Atk_Decks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Response_Field_Atk_Decks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Response_Field_Atk_Decks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Response_Field_Atk_Decks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldAtkDecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      object_pb.FieldAtkDeck.serializeBinaryToWriter
    );
  }
  f = message.getFrame();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated FieldAtkDeck field_atk_decks = 1;
 * @return {!Array<!proto.proto.FieldAtkDeck>}
 */
proto.proto.Response_Field_Atk_Decks.prototype.getFieldAtkDecksList = function() {
  return /** @type{!Array<!proto.proto.FieldAtkDeck>} */ (
    jspb.Message.getRepeatedWrapperField(this, object_pb.FieldAtkDeck, 1));
};


/**
 * @param {!Array<!proto.proto.FieldAtkDeck>} value
 * @return {!proto.proto.Response_Field_Atk_Decks} returns this
*/
proto.proto.Response_Field_Atk_Decks.prototype.setFieldAtkDecksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.FieldAtkDeck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.FieldAtkDeck}
 */
proto.proto.Response_Field_Atk_Decks.prototype.addFieldAtkDecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.FieldAtkDeck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Response_Field_Atk_Decks} returns this
 */
proto.proto.Response_Field_Atk_Decks.prototype.clearFieldAtkDecksList = function() {
  return this.setFieldAtkDecksList([]);
};


/**
 * optional int64 frame = 2;
 * @return {number}
 */
proto.proto.Response_Field_Atk_Decks.prototype.getFrame = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Response_Field_Atk_Decks} returns this
 */
proto.proto.Response_Field_Atk_Decks.prototype.setFrame = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.proto);
