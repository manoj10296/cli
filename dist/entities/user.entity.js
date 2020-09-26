"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "aadhaarNumber", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "addressLine1", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "addressLine2", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "mobileNumber", void 0);
    __decorate([
        typeorm_1.Column('boolean', { default: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column('boolean', { default: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isVerified", void 0);
    UserEntity = __decorate([
        typeorm_1.Entity('user')
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
