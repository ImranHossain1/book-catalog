"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileController = void 0;
const profile_service_1 = require("./profile.service");
const getUsersProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        const result = yield profile_service_1.UserProfileService.getUserProfile(token);
        res.status(200).json({
            status: 'success',
            message: 'Profile retrieved in successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserProfileController = {
    getUsersProfile,
};
