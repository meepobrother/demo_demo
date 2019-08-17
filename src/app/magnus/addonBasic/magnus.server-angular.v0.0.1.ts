/* tslint:disable */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from '@magnus-plugins/angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Json: any;
	Empty: any;
	Bool: any;
	Bytes: any;
	Date: any;
	Double: any;
	Error: any;
	Fixed32: any;
	Fixed64: any;
	Int32: any;
	Int64: any;
	Sfixed32: any;
	Sfixed64: any;
	Sint32: any;
	Sint64: any;
	Timestamp: any;
	Uint32: any;
	Uint64: any;
};

export type AddAlarmPlanResult = {
	__typename?: 'AddAlarmPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type AddStationUserInput = {
	/** 岗位id */
	stationId: Scalars['Int'];
	/** 用户id */
	uid: Scalars['Int'];
};

export type AddStationUserResult = {
	__typename?: 'AddStationUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回结果 */
	message: Scalars['String'];
};

/** 保存角色与权限关系 */
export type AddSystemRightInput = {
	/** 角色id */
	roleId: Scalars['Int'];
	rightId: Scalars['Int'];
	status: Scalars['Int'];
};

/** 保存或者编辑系统权限的返回信息 */
export type AddSystemRightResult = {
	__typename?: 'AddSystemRightResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

/** 绑定页面数据 */
export type BindTokenData = {
	__typename?: 'BindTokenData';
	/** 没有格式化的uid */
	id: Scalars['String'];
	/** 格式化后的用户uid */
	uid: Scalars['String'];
	/** 随机码 */
	randomCode: Scalars['String'];
};

/** 绑定表单数据 */
export type BindUserTokenInput = {
	/** 用户uid */
	uid: Scalars['Int'];
	/** 随机码 */
	randomCode: Scalars['String'];
	/** token值 */
	token: Scalars['String'];
};

/** 绑定结果数据 */
export type BindUserTokenResult = {
	__typename?: 'BindUserTokenResult';
	/**
	 * 200 绑定成功
	 * -100 token不匹配
	 **/
	code: Scalars['Int'];
	/** 消息 */
	message: Scalars['String'];
};

export type Box = {
	__typename?: 'box';
	/** 窗口id */
	id: Scalars['Int'];
	/** 组织 */
	organiztion: Scalars['String'];
	/** 设备名称 */
	title: Scalars['String'];
	/** 码流 */
	codeStream: Scalars['String'];
	/** 时长 */
	duration: Scalars['Int'];
};

export type BoxInput = {
	/** 窗口id */
	id: Scalars['Int'];
	/** 组织 */
	organiztion: Scalars['String'];
	/** 设备名称 */
	title: Scalars['String'];
	/** 码流 */
	codeStream: Scalars['String'];
	/** 时长 */
	duration: Scalars['Int'];
};

export type CheckUserStateResult = {
	__typename?: 'CheckUserStateResult';
	/**
	 * 状态码
	 * 200 可登录
	 * 100 您需要绑定令牌
	 * 101 需要修改密码
	 * 102 需要输入token码
	 **/
	code: Scalars['Int'];
	/** 附加消息 */
	message: Scalars['String'];
	/** 附加数据 */
	data: BindTokenData;
};

export type ConfirmUserPasswordInput = {
	/** 密码 */
	password?: Maybe<Scalars['String']>;
};

export type ConfirmUserPasswordResult = {
	__typename?: 'ConfirmUserPasswordResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type CreateDateInput = {
	/** new Date(`年-月-日 时-分-秒`).toISOString() */
	start?: Maybe<Scalars['String']>;
	/** new Date().toISOString() */
	end?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
	/** 创建人名字 */
	createUserName?: Maybe<Scalars['String']>;
	/** 创建人id */
	createUserId?: Maybe<Scalars['Int']>;
};

export type DateInput = {
	/** 开始时间-结束时间 */
	start?: Maybe<Scalars['String']>;
	end?: Maybe<Scalars['String']>;
};

export type DeleteAlarmPlanResult = {
	__typename?: 'DeleteAlarmPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteCaptureResult = {
	__typename?: 'DeleteCaptureResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteDepartmentInput = {
	/** 部门id */
	id: Scalars['Int'];
};

export type DeleteDepartmentResult = {
	__typename?: 'DeleteDepartmentResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type DeleteDomainResult = {
	__typename?: 'DeleteDomainResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteModuleResult = {
	__typename?: 'DeleteModuleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteRoleGroupInput = {
	id: Scalars['Int'];
	roleId: Scalars['Int'];
};

export type DeleteRoleGroupResult = {
	__typename?: 'DeleteRoleGroupResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type DeleteRoleRightInput = {
	/** 角色id */
	id: Scalars['Int'];
	/** 角色组拥有的角色 */
	ownRoles: Array<Maybe<RoleInput>>;
};

export type DeleteRoleRightResult = {
	__typename?: 'DeleteRoleRightResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type DeleteRoundPatrolResult = {
	__typename?: 'DeleteRoundPatrolResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteStationResult = {
	__typename?: 'DeleteStationResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteStationUserInput = {
	/** 用户id */
	uid: Scalars['Int'];
	/** 岗位id */
	stationId: Scalars['Int'];
};

export type DeleteStationUserResult = {
	__typename?: 'DeleteStationUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteUserResult = {
	__typename?: 'DeleteUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DeleteWallPlanResult = {
	__typename?: 'DeleteWallPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type DepartmentOrStationInput = {
	/**
	 * type = 'department' 部门, id是部门的id
	 * type = 'station' id是岗位的id
	 **/
	type: Scalars['String'];
	id: Scalars['Int'];
};

export type DoaminData = {
	__typename?: 'DoaminData';
	/** 域编号 */
	id: Scalars['Int'];
	/** 域编码 */
	code: Scalars['String'];
	/** 域名称 */
	title: Scalars['String'];
	/** 域简称 */
	desc: Scalars['String'];
	/** 创建日期 */
	createDate: Scalars['String'];
	/** 创建人 */
	createUserName: Scalars['String'];
	/** 创建人id */
	createUserId: Scalars['Int'];
	/** 状态 */
	status?: Maybe<Scalars['Int']>;
};

export type DomainData = {
	__typename?: 'DomainData';
	/** 域简称 */
	desc?: Maybe<Scalars['String']>;
	/** 域编号 */
	id?: Maybe<Scalars['Int']>;
	/** 域标题 */
	title?: Maybe<Scalars['String']>;
	/** 域编号 */
	code?: Maybe<Scalars['String']>;
	/** 域状态 */
	status?: Maybe<Scalars['Int']>;
	/** 创建日期 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserName?: Maybe<Scalars['String']>;
	/** 创建人Id */
	createUserId?: Maybe<Scalars['String']>;
};

/** 事件 */
export type Event = {
	__typename?: 'Event';
	/** 时间类型id,可以根据时间类型进行路由跳转到事件列表页 */
	id: Scalars['Int'];
	/** 时间名称 */
	title: Scalars['String'];
	/** 时间简介 */
	desc: Scalars['String'];
	/** 待处理消息个数 */
	count: Scalars['Int'];
};

export type FindAlarmPlanData = {
	__typename?: 'FindAlarmPlanData';
	/** 预案序号 */
	id: Scalars['Int'];
	/** 预案名称 */
	title: Scalars['String'];
	/** 优先级 */
	priority: Scalars['String'];
	/** 预案描述 */
	desc: Scalars['String'];
	/** 创建时间 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUser?: Maybe<Scalars['String']>;
};

export type FindAlarmPlanInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 预案名称 */
	title: Scalars['String'];
	/** 创建时间 开始and结束 */
	createDate?: Maybe<CreateDateInput>;
	/** 创建人 */
	createUser?: Maybe<CreateUserInput>;
};

export type FindAlarmPlanResult = {
	__typename?: 'FindAlarmPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FindAlarmPlanData>;
};

export type FindCaptureData = {
	__typename?: 'FindCaptureData';
	/** 设备序号 */
	id: Scalars['Int'];
	/** 设备名称 */
	title?: Maybe<Scalars['String']>;
	/** 通道 */
	aisle?: Maybe<Scalars['String']>;
	/** 抓图原因 */
	reason?: Maybe<Scalars['String']>;
	/** 备注 */
	remarks?: Maybe<Scalars['String']>;
	/** 创建日期 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserName?: Maybe<Scalars['String']>;
};

export type FindCaptureInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 设备id */
	deviceId: Scalars['String'];
	/** 设备名称 */
	title?: Maybe<Scalars['String']>;
	/** 抓图原因 */
	reason?: Maybe<Scalars['String']>;
	/** 创建时间 */
	createDate?: Maybe<CreateDateInput>;
	/** 创建人 */
	createUser?: Maybe<CreateUserInput>;
};

export type FindCaptureResult = {
	__typename?: 'FindCaptureResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FindCaptureData>;
};

export type FindDomainDataResult = {
	__typename?: 'FindDomainDataResult';
	count?: Maybe<Scalars['Int']>;
	list?: Maybe<Array<Maybe<DomainData>>>;
};

export type FindDomainInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 尺寸 */
	psize?: Maybe<Scalars['Int']>;
	/** 标题 */
	title?: Maybe<Scalars['String']>;
	/** 编号 */
	code?: Maybe<Scalars['String']>;
};

export type FindDomainResult = {
	__typename?: 'FindDomainResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FindDomainDataResult>;
};

export type FindMenuResult = {
	__typename?: 'FindMenuResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/**
	 * 返回数据
	 * id
	 * title
	 * icon
	 * status
	 * children
	 **/
	data?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type FindModuleData = {
	__typename?: 'FindModuleData';
	/** 数据源id */
	id: Scalars['Int'];
	/** 模块名称 */
	name: Scalars['String'];
	/** 链接 */
	link: Scalars['String'];
	/** 状态 */
	status: Scalars['Int'];
	/** 数据协议 */
	dataProtocol: Scalars['String'];
};

export type FindModuleInput = {
	/** 页码 */
	page: Scalars['Int'];
	/** 每页数量 */
	psize: Scalars['Int'];
	/** 模块名称 */
	name: Scalars['String'];
	/** 模块链接 */
	link: Scalars['String'];
};

export type FindModuleResult = {
	__typename?: 'FindModuleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<FindModuleData>>>;
};

export type FindPagePermissionData = {
	__typename?: 'FindPagePermissionData';
	/** 权限类型 */
	type: Scalars['String'];
	/** 角色id */
	roleId: Scalars['Int'];
	/** 基础平台id */
	fromSystemId?: Maybe<Scalars['Int']>;
};

export type FindPagePermissionResult = {
	__typename?: 'FindPagePermissionResult';
	/** 状态码 */
	code: Scalars['Int'];
	/** 消息 */
	message: Scalars['String'];
	/** 数据 */
	data?: Maybe<FindPagePermissionData>;
};

export type FindRoleDate = {
	__typename?: 'FindRoleDate';
	/** 序号 */
	id: Scalars['Int'];
	/** 角色名称 */
	roleName: Scalars['String'];
	/** 角色标识 */
	roleIdentification: Scalars['String'];
	/** 角色描述 */
	roleDesc: Scalars['String'];
	/** 数据权限 */
	dataPermission: Scalars['String'];
	/** 创建人 */
	createUserName: Scalars['String'];
	/** 父级角色 */
	parentRole: Scalars['String'];
	/** 创建时间 */
	createDate: Scalars['Int'];
};

export type FindRoleInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 角色名 */
	roleName?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserId?: Maybe<Scalars['Int']>;
	/** 创建时间 开始and结束 */
	createDate?: Maybe<CreateDateInput>;
};

export type FindRoleResult = {
	__typename?: 'FindRoleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<FindRoleDate>>>;
};

export type FindRoleRightsData = {
	__typename?: 'FindRoleRightsData';
	id?: Maybe<Scalars['Int']>;
	code?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	getRights?: Maybe<Array<Maybe<FindRoleRightsSystem>>>;
};

/** 取角色权限 */
export type FindRoleRightsResult = {
	__typename?: 'FindRoleRightsResult';
	code: Scalars['Int'];
	message: Scalars['String'];
	data?: Maybe<Array<Maybe<FindRoleRightsData>>>;
};

export type FindRoleRightsSystem = {
	__typename?: 'FindRoleRightsSystem';
	id: Scalars['Int'];
	type: Scalars['String'];
	title: Scalars['String'];
	code: Scalars['String'];
};

export type FindRoundPatrolInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 任务名称 */
	title?: Maybe<Scalars['String']>;
	/** 创建时间 */
	createDate?: Maybe<CreateDateInput>;
	/** 创建人 */
	createUser?: Maybe<CreateUserInput>;
};

export type FindStationData = {
	__typename?: 'FindStationData';
	/** 序号 */
	id: Scalars['Int'];
	/** 岗位名称 */
	positionTitle: Scalars['String'];
	/** 岗位编号 */
	jobNumber: Scalars['String'];
	/** 岗位描述 */
	jobDescription: Scalars['String'];
	/** 拥有角色 */
	haveRole: Array<Maybe<Scalars['String']>>;
	/** 创建人 */
	createUserName: Scalars['String'];
	/** 创建时间 */
	createDate: Scalars['String'];
};

export type FindStationInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 岗位名称 */
	positionTitle?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserUsername?: Maybe<Scalars['String']>;
	/** 创建时间 开始and结束 */
	createDate?: Maybe<Scalars['Empty']>;
};

export type FindStationResult = {
	__typename?: 'FindStationResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<FindStationData>>>;
};

export type FindSummaryData = {
	__typename?: 'FindSummaryData';
	/** 设备名称 */
	title?: Maybe<Scalars['String']>;
	/** 视频链接 */
	link?: Maybe<Scalars['String']>;
	/** 视频日期 */
	date?: Maybe<Scalars['String']>;
};

export type FindSummaryInput = {
	/**
	 * undefined 代表全选
	 * string[] 标识设备id数组
	 **/
	deviceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** 目标类型 */
	type?: Maybe<Scalars['String']>;
	/** 目标大小 */
	size?: Maybe<Scalars['String']>;
	/** 目标速度 */
	speed?: Maybe<Scalars['String']>;
	/** 目标颜色 */
	color?: Maybe<Scalars['String']>;
	/** 时间 */
	time?: Maybe<TimeInput>;
	/** 运动方向 */
	direction?: Maybe<Scalars['String']>;
	/** 车牌号 */
	numberPlate?: Maybe<Scalars['String']>;
};

export type FindSummaryResult = {
	__typename?: 'FindSummaryResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FindSummaryData>;
};

export type FindSystemInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 模块名称 */
	title?: Maybe<Scalars['String']>;
	/** 模块启动ip */
	ip?: Maybe<Scalars['String']>;
	/** 端口号 */
	port?: Maybe<Scalars['Int']>;
};

export type FindSystemResult = {
	__typename?: 'FindSystemResult';
	/** 系统编号 */
	id: Scalars['Int'];
	/** 系统名称 */
	title: Scalars['String'];
	/** 首页地址 */
	link: Scalars['String'];
	/** 拥有权限 */
	rights: FindSystemRight;
};

export type FindSystemRight = {
	__typename?: 'FindSystemRight';
	/** 权限id */
	id: Scalars['Int'];
	/** 权限名称 */
	title: Scalars['String'];
	/** 权限类型 */
	type: Scalars['Int'];
};

export type FindUserData = {
	__typename?: 'FindUserData';
	/** 序号 */
	id?: Maybe<Scalars['Int']>;
	/** 用户名 */
	username?: Maybe<Scalars['String']>;
	/** 手机号 */
	mobile?: Maybe<Scalars['String']>;
	/** 部门名称 */
	departmentTitle?: Maybe<Scalars['String']>;
	/** 角色 */
	roles?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** 状态 0:禁用状态;1:启用状态;-1:禁用后被启用 */
	status?: Maybe<Scalars['Int']>;
	/** 创建时间 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserName?: Maybe<Scalars['String']>;
};

export type FindUserDateInput = {
	/** new Date(`年-月-日 时-分-秒`).toISOString() */
	start?: Maybe<Scalars['String']>;
	/** new Date().toISOString() */
	end?: Maybe<Scalars['String']>;
};

export type FindUserInput = {
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
	/** 名称 */
	username?: Maybe<Scalars['String']>;
	/** 手机号 */
	mobile?: Maybe<Scalars['String']>;
	/**
	 * 状态
	 * 状态码:0:禁用状态;1:启用状态;-1:禁用后被启用
	 **/
	status?: Maybe<Scalars['Int']>;
	/** 创建时间  开始and结束 */
	createDate?: Maybe<FindUserDateInput>;
	createUserId?: Maybe<Scalars['Int']>;
	departmentOrStation?: Maybe<DepartmentOrStationInput>;
};

export type FindUserResult = {
	__typename?: 'FindUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<FindUserData>>>;
};

export type FindWallPlanData = {
	__typename?: 'FindWallPlanData';
	/** 预案名称 */
	title: Scalars['String'];
	/** 描述 */
	desc: Scalars['String'];
	/** 创建人 */
	cearteUserName: Scalars['String'];
	/** 日期时间 */
	cearteDate: Scalars['String'];
};

export type FindWallPlanInput = {
	/** 预案id */
	id: Scalars['Int'];
	/** 预案名称 */
	title: Scalars['String'];
	/** 创建时间 */
	createDate?: Maybe<CreateDateInput>;
	/** 创建人 */
	createUser?: Maybe<CreateUserInput>;
};

export type FindWallPlanResult = {
	__typename?: 'FindWallPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FindWallPlanData>;
};

export type FinRoundPatrolData = {
	__typename?: 'FinRoundPatrolData';
	/** 任务序号 */
	id?: Maybe<Scalars['Int']>;
	/** 任务名称 */
	title?: Maybe<Scalars['String']>;
	/** 窗口数 */
	windows?: Maybe<Scalars['Int']>;
	/** 任务描述 */
	desc?: Maybe<Scalars['String']>;
	/** 创建日期 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserName?: Maybe<Scalars['String']>;
};

export type FinRoundPatrolResult = {
	__typename?: 'FinRoundPatrolResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<FinRoundPatrolData>;
};

export type ForbidAlarmPlanInput = {
	/** 预案id */
	id: Scalars['Int'];
	/** 状态 */
	status: Scalars['Int'];
};

export type ForbidAlarmPlanResult = {
	__typename?: 'forbidAlarmPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回数据 */
	message: Scalars['String'];
};

export type ForbidDomainInput = {
	/** 域id */
	id: Scalars['Int'];
	/** 状态 */
	status: Scalars['Int'];
};

export type ForbidDomainResult = {
	__typename?: 'ForbidDomainResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type ForbidModuleInput = {
	/** 菜单id */
	id: Scalars['Int'];
	/** 状态 */
	status: Scalars['Int'];
};

export type ForbidModuleResult = {
	__typename?: 'ForbidModuleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type ForbidStationInput = {
	/** id */
	id: Scalars['Int'];
	/** 状态 */
	status: Scalars['Int'];
};

export type ForbidStationResult = {
	__typename?: 'ForbidStationResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回数据 */
	message: Scalars['String'];
};

export type ForbidUserInput = {
	/** 用户id */
	uid: Scalars['Int'];
	/** 状态:0:禁用状态 1:启用状态 -1: 禁用后启用 */
	status: Scalars['Int'];
};

export type ForbidUserResult = {
	__typename?: 'ForbidUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type GetAlarmPlanData = {
	__typename?: 'GetAlarmPlanData';
	id: Scalars['Int'];
};

export type GetAlarmPlanResult = {
	__typename?: 'GetAlarmPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<GetAlarmPlanData>;
};

export type GetAllDepartmentInput = {
	title?: Maybe<Scalars['String']>;
};

export type GetAllDepartmentResult = {
	__typename?: 'GetAllDepartmentResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/**
	 * 部门id
	 * id: number;
	 * 部门下面的子部门
	 * children: GetAllDepartmentData[];
	 * 部门名称
	 * title: string;
	 **/
	data?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type GetAllStationByDepartmentInput = {
	/** 部门id */
	departmentId: Scalars['Int'];
};

export type GetAllStationByDepartmentResult = {
	__typename?: 'GetAllStationByDepartmentResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<GetAllStationData>>>;
};

export type GetAllStationData = {
	__typename?: 'GetAllStationData';
	/** 岗位id */
	id: Scalars['Int'];
	/** 岗位名称 */
	title: Scalars['String'];
};

export type GetAllUserByStationInput = {
	/** 岗位id */
	stationId: Scalars['Int'];
};

export type GetAllUserByStationResult = {
	__typename?: 'GetAllUserByStationResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Array<Maybe<GetAllUSerData>>>;
};

export type GetAllUSerData = {
	__typename?: 'GetAllUSerData';
	/** 用户名称 */
	title: Scalars['String'];
	/** 用户id */
	id: Scalars['String'];
};

export type GetDomainResult = {
	__typename?: 'GetDomainResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<DoaminData>;
};

export type GetModuleData = {
	__typename?: 'GetModuleData';
	/** 数据id */
	id: Scalars['Int'];
	/** 模块名称 */
	name: Scalars['String'];
	/** 数据链接 */
	link: Scalars['String'];
	/** 状态 */
	status: Scalars['Int'];
	/** 数据协议 */
	dataProtocol: Scalars['String'];
};

export type GetModuleResult = {
	__typename?: 'GetModuleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<GetModuleData>;
};

export type GetPermissionResult = {
	__typename?: 'GetPermissionResult';
	data?: Maybe<Array<Maybe<GetPermissionSystem>>>;
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type GetPermissionSystem = {
	__typename?: 'GetPermissionSystem';
	/** 系统id */
	id: Scalars['Int'];
	/** 系统名称 */
	title: Scalars['String'];
	children: Array<Maybe<Scalars['Json']>>;
};

export type GetRoleData = {
	__typename?: 'GetRoleData';
	/**
	 * 1选中
	 * 0未选中
	 **/
	status?: Maybe<Scalars['Int']>;
	/** 角色id */
	id?: Maybe<Scalars['Int']>;
	/** 角色名字 */
	title?: Maybe<Scalars['String']>;
	/** 角色标识 */
	code?: Maybe<Scalars['String']>;
	/** 角色描述 */
	desc?: Maybe<Scalars['String']>;
	/** 数据权限 */
	rights?: Maybe<Array<Maybe<Right>>>;
	/** 创建人 */
	createDate?: Maybe<Scalars['String']>;
};

/** 获取一个角色组参数 */
export type GetroleGroupInput = {
	id: Scalars['Int'];
	roleId: Scalars['Int'];
};

export type GetRoleGroupInput = {
	/** 角色组id */
	groupId: Scalars['Int'];
	/** 角色名称 */
	roleTitle?: Maybe<Scalars['String']>;
	/** 角色标识 */
	roleCode?: Maybe<Scalars['String']>;
	/** 创建人id */
	createUserId?: Maybe<Scalars['Int']>;
	/** 开始时间 */
	startDate?: Maybe<Scalars['String']>;
	/** 结束时间 */
	endDate?: Maybe<Scalars['String']>;
	/** 页码 */
	page?: Maybe<Scalars['Int']>;
	/** 每页数量 */
	psize?: Maybe<Scalars['Int']>;
};

/** 获取一个角色组返回值 */
export type GetroleGroupResult = {
	__typename?: 'GetroleGroupResult';
	code: Scalars['Int'];
	message: Scalars['String'];
	data?: Maybe<GetRoleGroups>;
};

/** 返回的数据 */
export type GetRoleGroups = {
	__typename?: 'GetRoleGroups';
	id: Scalars['Int'];
	title: Scalars['String'];
	desc: Scalars['String'];
};

export type GetRoleResult = {
	__typename?: 'GetRoleResult';
	/** 角色的返回码 */
	code: Scalars['Int'];
	/** 角色的返回信息 */
	message: Scalars['String'];
	/** 角色的返回数据 */
	date?: Maybe<Array<Maybe<GetRoleData>>>;
};

export type GetRoundPatrolData = {
	__typename?: 'GetRoundPatrolData';
	/** 任务id */
	id: Scalars['Int'];
	/** 任务名称 */
	title: Scalars['String'];
	/** 分屏样式 */
	screenStyle: Scalars['String'];
	/** 任务描述 */
	desc: Scalars['String'];
	/** 创建人 */
	createUserName: Scalars['String'];
	/** 创建人id */
	createUserId: Scalars['Int'];
	/** 创建日期 */
	createDate: Scalars['String'];
	/** 窗口配置 */
	windowConfig: Array<Maybe<Box>>;
};

export type GetRoundPatrolResult = {
	__typename?: 'GetRoundPatrolResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<GetRoundPatrolData>;
};

/** GetStation的岗位信息 */
export type GetStationData = {
	__typename?: 'GetStationData';
	/** 部门 */
	department: GetStationDepartment;
	/** 岗位编号 */
	jobNumber: Scalars['String'];
	/** 岗位名称 */
	positionTitle: Scalars['String'];
	/** 岗位描述 */
	jobDescription: Scalars['String'];
	/**
	 * /
	 * 岗位职责
	 **/
	jobResponsibilities: Scalars['String'];
	/** 岗位要求 */
	jobRequirements: Scalars['String'];
	/** 角色组 */
	roleGroup: GetStationRoleGroup;
	/** 状态 */
	status: Scalars['Int'];
};

export type GetStationDepartment = {
	__typename?: 'GetStationDepartment';
	id: Scalars['Int'];
	title: Scalars['String'];
};

export type GetStationResult = {
	__typename?: 'GetStationResult';
	code: Scalars['Int'];
	message: Scalars['String'];
	data?: Maybe<GetStationData>;
};

export type GetStationRoleGroup = {
	__typename?: 'GetStationRoleGroup';
	id: Scalars['Int'];
	title: Scalars['String'];
};

export type GetSystemData = {
	__typename?: 'GetSystemData';
	/** 系统、模块Id */
	id: Scalars['Int'];
	/** 模块、系统标题 */
	title: Scalars['String'];
	/** 模块、系统连接 */
	link: Scalars['String'];
	/** 模块、系统权限 */
	rights: Array<Maybe<GetSystemRight>>;
};

export type GetSystemResult = {
	__typename?: 'GetSystemResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<GetSystemData>;
};

export type GetSystemRight = {
	__typename?: 'GetSystemRight';
	/** 权限编号 */
	id: Scalars['Int'];
	/** 权限名称 */
	title: Scalars['String'];
};

export type GetUserResult = {
	__typename?: 'GetUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<GetUserResultData>;
};

export type GetUserResultData = {
	__typename?: 'GetUserResultData';
	/** 用户id */
	id?: Maybe<Scalars['String']>;
	/** 用户名称 */
	username: Scalars['String'];
	/** 电话号码 */
	mobile?: Maybe<Scalars['String']>;
	/** 电子邮箱 */
	email?: Maybe<Scalars['String']>;
	/** 任岗的id和title */
	stations?: Maybe<Array<Maybe<GetUsertations>>>;
	/** 绑定人员的id */
	bindingStaff?: Maybe<GetUsertations>;
	/** 状态 */
	status?: Maybe<Scalars['Int']>;
	/** 创建时间 */
	createDate?: Maybe<Scalars['String']>;
	/** 创建人 */
	createUserName?: Maybe<Scalars['String']>;
};

export type GetUsertations = {
	__typename?: 'GetUsertations';
	id: Scalars['Int'];
	title: Scalars['String'];
};

/** 登录结果 */
export type LoginOutput = {
	__typename?: 'LoginOutput';
	/**
	 * 返回码
	 * 大于0成功
	 * 小于0失败
	 **/
	code: Scalars['Int'];
	/** 返回码消息 */
	message: Scalars['String'];
	/**
	 * token
	 * code >0 时携带
	 **/
	token?: Maybe<Scalars['String']>;
};

/** 模块 */
export type Module = {
	__typename?: 'Module';
	title: Scalars['String'];
	events: Array<Maybe<Event>>;
};

export type Mutation = {
	__typename?: 'Mutation';
	verifyUserToken?: Maybe<Scalars['Boolean']>;
	/** 绑定随机码 */
	bindUserToken?: Maybe<BindUserTokenResult>;
	/**
	 * 伪删除域管理
	 * status -1 删除成功!
	 **/
	deleteDomain?: Maybe<DeleteDomainResult>;
	/**
	 * 域禁用
	 * status 0为禁用 1启用成功
	 **/
	forbidDomain?: Maybe<ForbidDomainResult>;
	/** 保存域 编辑域 */
	saveDomain?: Maybe<SaveDomainResult>;
	/** 新增报警预案 */
	AddAlarmPlan?: Maybe<AddAlarmPlanResult>;
	/** 删除报警预案 */
	deleteAlarmPlan?: Maybe<DeleteAlarmPlanResult>;
	/**
	 * 报警预案禁用
	 * status 0为禁用 1启用成功
	 **/
	forbidAlarmPlan?: Maybe<ForbidAlarmPlanResult>;
	saveAlarmPlan?: Maybe<SaveAlarmPlanResult>;
	saveMenu?: Maybe<SaveMenuRsesult>;
	deleteModule?: Maybe<DeleteModuleResult>;
	forbidModule?: Maybe<ForbidModuleResult>;
	/** 根据设备id删除抓拍图片 */
	deleteCapture?: Maybe<DeleteCaptureResult>;
	saveCapture?: Maybe<SaveCaptureResult>;
	addOrRemoveSystemRight?: Maybe<AddSystemRightResult>;
	saveRoleRight?: Maybe<SaveRoleRightResult>;
	deleteRoleRight?: Maybe<DeleteRoleRightResult>;
	savaRole?: Maybe<SaveRoleResult>;
	/** 通过任务id删除任务详情 */
	deleteRoundPatrol?: Maybe<DeleteRoundPatrolResult>;
	/** 轮巡编辑-保存 */
	saveRoundPatrol?: Maybe<SaveRoundPatrolResult>;
	deleteStation?: Maybe<DeleteStationResult>;
	/** 禁用岗位 */
	forbidStation?: Maybe<ForbidStationResult>;
	/** 保存部门 编辑部门 删除部门 */
	saveDepartment?: Maybe<SaveDepartmentResult>;
	saveStation?: Maybe<SaveStationResult>;
	deleteDepartment?: Maybe<DeleteDepartmentResult>;
	/** 删除岗位的用户 */
	deleteStationUser?: Maybe<DeleteStationUserResult>;
	/** 添加岗位的用户 */
	addStationUser?: Maybe<AddStationUserResult>;
	saveSummary?: Maybe<SaveSummaryResult>;
	deleteUser?: Maybe<DeleteUserResult>;
	forbidUser?: Maybe<ForbidUserResult>;
	saveUser?: Maybe<SaveUserResult>;
	updateUserPassword?: Maybe<UpdateUserPasswordResult>;
	/** 根据预案id 删除上墙预案 */
	deleteWallPlan?: Maybe<DeleteWallPlanResult>;
	saveWallPlan?: Maybe<SaveWallPlanResult>;
};

export type MutationVerifyUserTokenArgs = {
	token: Scalars['String'];
	uid: Scalars['Int'];
};

export type MutationBindUserTokenArgs = {
	entity: BindUserTokenInput;
};

export type MutationDeleteDomainArgs = {
	id: Scalars['Int'];
};

export type MutationForbidDomainArgs = {
	entity: ForbidDomainInput;
};

export type MutationSaveDomainArgs = {
	entity: SaveDomainInput;
};

export type MutationAddAlarmPlanArgs = {
	id: Scalars['Int'];
};

export type MutationDeleteAlarmPlanArgs = {
	id: Scalars['Int'];
};

export type MutationForbidAlarmPlanArgs = {
	entity: ForbidAlarmPlanInput;
};

export type MutationSaveMenuArgs = {
	entity: SaveMenuInput;
};

export type MutationDeleteModuleArgs = {
	id: Scalars['Int'];
};

export type MutationForbidModuleArgs = {
	entity: ForbidModuleInput;
};

export type MutationDeleteCaptureArgs = {
	id: Scalars['Int'];
};

export type MutationSaveCaptureArgs = {
	entity: SaveCaptureInput;
};

export type MutationAddOrRemoveSystemRightArgs = {
	entity: AddSystemRightInput;
};

export type MutationSaveRoleRightArgs = {
	entity: SaveRoleRightInput;
};

export type MutationDeleteRoleRightArgs = {
	entity: DeleteRoleRightInput;
};

export type MutationSavaRoleArgs = {
	entity: SaveRoleInput;
};

export type MutationDeleteRoundPatrolArgs = {
	id: Scalars['Int'];
};

export type MutationSaveRoundPatrolArgs = {
	entity: SaveRoundPatrolInput;
};

export type MutationDeleteStationArgs = {
	id: Scalars['Int'];
};

export type MutationForbidStationArgs = {
	entity: ForbidStationInput;
};

export type MutationSaveDepartmentArgs = {
	entity: SaveDepartmentInput;
};

export type MutationSaveStationArgs = {
	entity: SaveStationInput;
};

export type MutationDeleteDepartmentArgs = {
	entity: DeleteDepartmentInput;
};

export type MutationDeleteStationUserArgs = {
	entity: DeleteStationUserInput;
};

export type MutationAddStationUserArgs = {
	entity: AddStationUserInput;
};

export type MutationSaveSummaryArgs = {
	entity: SaveSummaryInput;
};

export type MutationDeleteUserArgs = {
	uid: Scalars['Int'];
};

export type MutationForbidUserArgs = {
	entity: ForbidUserInput;
};

export type MutationSaveUserArgs = {
	entity: SaveUserInput;
};

export type MutationUpdateUserPasswordArgs = {
	entity: UpdateUserPasswordInput;
};

export type MutationDeleteWallPlanArgs = {
	id: Scalars['Int'];
};

export type MutationSaveWallPlanArgs = {
	entity: SaveWallPlanInput;
};

export type Query = {
	__typename?: 'Query';
	/** 欢迎页信息 */
	getWelcomeInfo?: Maybe<WelcomeInfo>;
	/** 获取欢迎页代办事项 */
	getWelcomeToDoItems?: Maybe<ToDoItems>;
	/** 获取欢迎页展示子系统 */
	getWelcomeSystems?: Maybe<Array<Maybe<System>>>;
	/** 重新获取随机码 */
	createRandomCode?: Maybe<Scalars['String']>;
	/** 检查用户状态 */
	checkUserState?: Maybe<CheckUserStateResult>;
	/** 用户登录 */
	login?: Maybe<LoginOutput>;
	/** 查找域 */
	findDomain?: Maybe<FindDomainResult>;
	/** 获取域详情 */
	getDomain?: Maybe<GetDomainResult>;
	/** 获取所有的报警预案 */
	findAlarmPlan?: Maybe<FindAlarmPlanResult>;
	getAlarmPlan?: Maybe<FindPagePermissionResult>;
	findmenu?: Maybe<FindMenuResult>;
	findModule?: Maybe<FindModuleResult>;
	getModule?: Maybe<GetModuleResult>;
	/** 查抓图 */
	findCapture?: Maybe<FindCaptureResult>;
	findRoleRights?: Maybe<FindRoleRightsResult>;
	getPermission?: Maybe<GetPermissionResult>;
	findRole?: Maybe<FindRoleResult>;
	getRole?: Maybe<GetRoleResult>;
	getRoleGroup?: Maybe<GetroleGroupResult>;
	deleteRoleGroup?: Maybe<DeleteRoleGroupResult>;
	/** 轮巡任务-通过条件查询轮巡任务列表 */
	findRoundPatrol?: Maybe<FinRoundPatrolResult>;
	/** 获取任务详情 */
	getRoundPatrol?: Maybe<GetRoundPatrolResult>;
	/** 根据指定条件查询批量的岗位 */
	findStation?: Maybe<FindStationResult>;
	/** 根据岗位id获取岗位的信息 */
	getStation?: Maybe<GetStationResult>;
	getAllDepartment?: Maybe<GetAllDepartmentResult>;
	/** 通过部门获取所有岗位 */
	getAllStationByDepartment?: Maybe<GetAllStationByDepartmentResult>;
	/** 通过岗位获取所有用户 */
	getAllUserByStation?: Maybe<GetAllUserByStationResult>;
	findSummary?: Maybe<FindSummaryResult>;
	/** 模块管理-根据条件获取模块列表 */
	findSystem?: Maybe<Array<Maybe<FindSystemResult>>>;
	/** 获取系统详情 */
	getSystem?: Maybe<GetSystemResult>;
	confirmUserPassword?: Maybe<ConfirmUserPasswordResult>;
	findUser?: Maybe<FindUserResult>;
	getUser?: Maybe<GetUserResult>;
	findWallPlan?: Maybe<FindWallPlanResult>;
};

export type QueryCheckUserStateArgs = {
	username: Scalars['String'];
};

export type QueryLoginArgs = {
	username: Scalars['String'];
	password: Scalars['String'];
};

export type QueryFindDomainArgs = {
	entity: FindDomainInput;
};

export type QueryGetDomainArgs = {
	id: Scalars['Int'];
};

export type QueryFindAlarmPlanArgs = {
	entity: FindAlarmPlanInput;
};

export type QueryFindModuleArgs = {
	entity: FindModuleInput;
};

export type QueryGetModuleArgs = {
	id: Scalars['Int'];
};

export type QueryFindCaptureArgs = {
	entity: FindCaptureInput;
};

export type QueryFindRoleArgs = {
	entity: FindRoleInput;
};

export type QueryGetRoleArgs = {
	entity: GetRoleGroupInput;
};

export type QueryGetRoleGroupArgs = {
	entity: GetroleGroupInput;
};

export type QueryDeleteRoleGroupArgs = {
	entity: DeleteRoleGroupInput;
};

export type QueryFindRoundPatrolArgs = {
	entity: FindRoundPatrolInput;
};

export type QueryGetRoundPatrolArgs = {
	id: Scalars['Int'];
};

export type QueryFindStationArgs = {
	entity: FindStationInput;
};

export type QueryGetStationArgs = {
	id: Scalars['Int'];
};

export type QueryGetAllDepartmentArgs = {
	entity: GetAllDepartmentInput;
};

export type QueryGetAllStationByDepartmentArgs = {
	entity: GetAllStationByDepartmentInput;
};

export type QueryGetAllUserByStationArgs = {
	entity: GetAllUserByStationInput;
};

export type QueryFindSummaryArgs = {
	entity: FindSummaryInput;
};

export type QueryFindSystemArgs = {
	entity?: Maybe<FindSystemInput>;
};

export type QueryGetSystemArgs = {
	id: Scalars['Int'];
};

export type QueryConfirmUserPasswordArgs = {
	entity: ConfirmUserPasswordInput;
};

export type QueryFindUserArgs = {
	entity: FindUserInput;
};

export type QueryGetUserArgs = {
	uid: Scalars['Int'];
};

export type QueryFindWallPlanArgs = {
	entity: FindWallPlanInput;
};

export type Right = {
	__typename?: 'Right';
	/** 权限id */
	id?: Maybe<Scalars['Int']>;
	/** 权限名字 */
	title?: Maybe<Scalars['String']>;
};

export type Role = {
	__typename?: 'Role';
	/** 角色名称 */
	title: Scalars['String'];
	/** 角色id */
	id: Scalars['Int'];
};

export type RoleInput = {
	/** 角色名称 */
	title: Scalars['String'];
	/** 角色id */
	id: Scalars['Int'];
};

export type SaveAlarmPlanResult = {
	__typename?: 'SaveAlarmPlanResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type SaveCaptureInput = {
	/** 抓图原因 */
	reason?: Maybe<Scalars['String']>;
	/** 备注 */
	remarks?: Maybe<Scalars['String']>;
};

export type SaveCaptureResult = {
	__typename?: 'SaveCaptureResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type SaveDepartmentInput = {
	id?: Maybe<Scalars['Int']>;
	title?: Maybe<Scalars['String']>;
	icon?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['Int']>;
	children?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type SaveDepartmentResult = {
	__typename?: 'SaveDepartmentResult';
	code: Scalars['Int'];
	message: Scalars['String'];
	/**
	 * 返回数据
	 * id
	 * title
	 * children
	 **/
	data?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

/** 保存域输入 */
export type SaveDomainInput = {
	/** 域id */
	id?: Maybe<Scalars['Int']>;
	/** 域编号 */
	code?: Maybe<Scalars['String']>;
	/** 域标题 */
	title?: Maybe<Scalars['String']>;
	/** 域简称 */
	desc?: Maybe<Scalars['String']>;
};

export type SaveDomainResult = {
	__typename?: 'SaveDomainResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type SaveMenuData = {
	__typename?: 'SaveMenuData';
	/** 菜单id */
	menuId?: Maybe<Scalars['Int']>;
	/** 状态 */
	status?: Maybe<Scalars['Int']>;
	/** 图标 */
	icon?: Maybe<Scalars['String']>;
	/** 标题 */
	title?: Maybe<Scalars['String']>;
	children: Array<Maybe<SaveMenuData>>;
};

export type SaveMenuInput = {
	/** 菜单id */
	menuId?: Maybe<Scalars['Int']>;
	/** 状态 */
	status?: Maybe<Scalars['Int']>;
	/** 图标 */
	icon?: Maybe<Scalars['String']>;
	/** 标题 */
	title?: Maybe<Scalars['String']>;
};

export type SaveMenuRsesult = {
	__typename?: 'SaveMenuRsesult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<SaveMenuData>;
};

export type SaveResultData = {
	__typename?: 'SaveResultData';
	/** 角色id */
	id: Scalars['Int'];
	/** 角色名称 */
	roleName: Scalars['String'];
	/** 角色标识 */
	roleIdentification: Scalars['String'];
	/** 角色描述 */
	roleDescription: Scalars['String'];
	/** 基础角色 */
	basicRole: Array<Maybe<Role>>;
	/** 互斥角色 */
	mutexRole: Array<Maybe<Role>>;
	/** 状态 */
	status: Scalars['Int'];
	/** 创建日期 */
	createDate: Scalars['String'];
	/** 创建人 */
	createUserName: Scalars['String'];
};

export type SaveRoleInput = {
	/** 角色id */
	id?: Maybe<Scalars['Int']>;
	/** 角色名称 */
	roleName?: Maybe<Scalars['String']>;
	/** 角色标识 */
	roleIdentification?: Maybe<Scalars['String']>;
	/** 角色描述 */
	roleDescription?: Maybe<Scalars['String']>;
	/** 基础角色 */
	basicRole?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** 互斥角色 */
	mutexRole?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SaveRoleResult = {
	__typename?: 'SaveRoleResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<SaveResultData>;
};

export type SaveRoleRightInput = {
	/** 角色id */
	id: Scalars['Int'];
	/** 角色组拥有的角色 */
	ownRoles: Array<Maybe<RoleInput>>;
};

export type SaveRoleRightResult = {
	__typename?: 'SaveRoleRightResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type SaveRoundPatrolInput = {
	/** 任务id */
	id?: Maybe<Scalars['Int']>;
	/** 任务名称 */
	title?: Maybe<Scalars['String']>;
	/** 分屏样式 */
	screenStyle?: Maybe<Scalars['String']>;
	/** 任务描述 */
	desc?: Maybe<Scalars['String']>;
	/** 当前窗口 */
	windowConfig: Array<Maybe<BoxInput>>;
};

export type SaveRoundPatrolResult = {
	__typename?: 'SaveRoundPatrolResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type SaveStationInput = {
	id?: Maybe<Scalars['Int']>;
	departmentId?: Maybe<Scalars['Int']>;
	jobNumber?: Maybe<Scalars['String']>;
	positionTitle?: Maybe<Scalars['String']>;
	jobDescription?: Maybe<Scalars['String']>;
	jobResponsibilities?: Maybe<Scalars['String']>;
	jobRequirements?: Maybe<Scalars['String']>;
	roleGroupId?: Maybe<Scalars['Int']>;
};

export type SaveStationResult = {
	__typename?: 'SaveStationResult';
	code: Scalars['Int'];
	message: Scalars['String'];
};

export type SaveSummaryInput = {
	/** 设备 */
	deviceId?: Maybe<Scalars['String']>;
	/** 位置 */
	position?: Maybe<Scalars['String']>;
	/** 时间 */
	time?: Maybe<DateInput>;
	/** 车牌号 */
	numberPlate?: Maybe<Scalars['String']>;
	/** 目标类型 */
	type?: Maybe<Scalars['String']>;
	/** 目标大小 */
	size?: Maybe<Scalars['String']>;
	/** 目标速度 */
	speed?: Maybe<Scalars['String']>;
	/** 目标颜色 */
	color?: Maybe<Scalars['String']>;
	/** 运动方向 */
	direction?: Maybe<Scalars['String']>;
};

export type SaveSummaryResult = {
	__typename?: 'SaveSummaryResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

export type SaveUserData = {
	__typename?: 'SaveUserData';
	/** 用户ID */
	id?: Maybe<Scalars['String']>;
	/** 用户名 */
	username?: Maybe<Scalars['String']>;
	/** 电话号码 */
	mobile?: Maybe<Scalars['String']>;
	/** 电子邮箱 */
	email?: Maybe<Scalars['String']>;
	/** 岗位 */
	renGang?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** 绑定人员 */
	bindingStaff?: Maybe<Scalars['String']>;
};

export type SaveUserInput = {
	/** 用户id */
	id?: Maybe<Scalars['Int']>;
	/** 用户名称 */
	username?: Maybe<Scalars['String']>;
	/** 电话号码 */
	mobile?: Maybe<Scalars['String']>;
	/** 电子邮箱 */
	email?: Maybe<Scalars['String']>;
	/** 任岗的id */
	renGang?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** 绑定人员的id */
	bindingStaff?: Maybe<Scalars['Int']>;
};

export type SaveUserResult = {
	__typename?: 'SaveUserResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<SaveUserData>;
};

export type SaveWallPlanInput = {
	/** 预案名称 */
	title: Scalars['String'];
	/** 预案描述 */
	desc: Scalars['String'];
	/** 设备id */
	deviceId: Scalars['String'];
};

export type SaveWallPlanResult = {
	__typename?: 'saveWallPlanResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

/** 子系统 */
export type System = {
	__typename?: 'System';
	/** 图片 */
	image: Scalars['String'];
	/** 标题 */
	title: Scalars['String'];
	/** 连接 */
	link: Scalars['String'];
};

export type TimeInput = {
	/** 开始时间-结束时间 */
	start?: Maybe<Scalars['String']>;
	end?: Maybe<Scalars['String']>;
};

/** 着陆页代办事项 */
export type ToDoItems = {
	__typename?: 'ToDoItems';
	/** 今天的待办事项 */
	today: Array<Maybe<Module>>;
	/** 昨天的代办事项 */
	yestoday: Array<Maybe<Module>>;
	/** 本周的代办事项 */
	thisweek: Array<Maybe<Module>>;
	/** 上周的代办事项 */
	lastweek: Array<Maybe<Module>>;
	/** 30天内代办事项 */
	within30Days: Array<Maybe<Module>>;
	/** 30天前代办事项 */
	thirtyDaysAgo: Array<Maybe<Module>>;
};

export type UpdateUserPasswordInput = {
	/** 新密码 */
	newPassword: Scalars['String'];
	/** 密码确认 */
	passwordConfirmation: Scalars['String'];
	/** 用户Id */
	uid: Scalars['Int'];
};

export type UpdateUserPasswordResult = {
	__typename?: 'UpdateUserPasswordResult';
	/** 返回码 */
	code: Scalars['Int'];
	/** 返回信息 */
	message: Scalars['String'];
};

/** 欢迎页信息 */
export type WelcomeInfo = {
	__typename?: 'WelcomeInfo';
	/** 头部图片 */
	image: Scalars['String'];
	/** 标题 */
	title: Scalars['String'];
	/** 二级标题 */
	secondTitle: Scalars['String'];
	/** 简介 */
	desc: Scalars['String'];
};
export type GetWelcomeInfoQueryVariables = {};

export type GetWelcomeInfoQuery = { __typename?: 'Query' } & {
	getWelcomeInfo: Maybe<
		{ __typename?: 'WelcomeInfo' } & Pick<WelcomeInfo, 'image' | 'title' | 'secondTitle' | 'desc'>
	>;
};

export type GetWelcomeToDoItemsQueryVariables = {};

export type GetWelcomeToDoItemsQuery = { __typename?: 'Query' } & {
	getWelcomeToDoItems: Maybe<
		{ __typename?: 'ToDoItems' } & {
			today: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
			yestoday: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
			thisweek: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
			lastweek: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
			within30Days: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
			thirtyDaysAgo: Array<
				Maybe<
					{ __typename?: 'Module' } & Pick<Module, 'title'> & {
							events: Array<
								Maybe<
									{ __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'desc' | 'count'>
								>
							>;
						}
				>
			>;
		}
	>;
};

export type GetWelcomeSystemsQueryVariables = {};

export type GetWelcomeSystemsQuery = { __typename?: 'Query' } & {
	getWelcomeSystems: Maybe<
		Array<Maybe<{ __typename?: 'System' } & Pick<System, 'image' | 'title' | 'link'>>>
	>;
};

export type CreateRandomCodeQueryVariables = {};

export type CreateRandomCodeQuery = { __typename?: 'Query' } & Pick<Query, 'createRandomCode'>;

export type CheckUserStateQueryVariables = {
	username: Scalars['String'];
};

export type CheckUserStateQuery = { __typename?: 'Query' } & {
	checkUserState: Maybe<
		{ __typename?: 'CheckUserStateResult' } & Pick<CheckUserStateResult, 'code' | 'message'> & {
				data: { __typename?: 'BindTokenData' } & Pick<BindTokenData, 'id' | 'uid' | 'randomCode'>;
			}
	>;
};

export type LoginQueryVariables = {
	username: Scalars['String'];
	password: Scalars['String'];
};

export type LoginQuery = { __typename?: 'Query' } & {
	login: Maybe<{ __typename?: 'LoginOutput' } & Pick<LoginOutput, 'code' | 'message' | 'token'>>;
};

export type FindDomainQueryVariables = {
	entity: FindDomainInput;
};

export type FindDomainQuery = { __typename?: 'Query' } & {
	findDomain: Maybe<
		{ __typename?: 'FindDomainResult' } & Pick<FindDomainResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindDomainDataResult' } & Pick<FindDomainDataResult, 'count'> & {
							list: Maybe<
								Array<
									Maybe<
										{ __typename?: 'DomainData' } & Pick<
											DomainData,
											| 'desc'
											| 'id'
											| 'title'
											| 'code'
											| 'status'
											| 'createDate'
											| 'createUserName'
											| 'createUserId'
										>
									>
								>
							>;
						}
				>;
			}
	>;
};

export type GetDomainQueryVariables = {
	id: Scalars['Int'];
};

export type GetDomainQuery = { __typename?: 'Query' } & {
	getDomain: Maybe<
		{ __typename?: 'GetDomainResult' } & Pick<GetDomainResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'DoaminData' } & Pick<
						DoaminData,
						| 'id'
						| 'code'
						| 'title'
						| 'desc'
						| 'createDate'
						| 'createUserName'
						| 'createUserId'
						| 'status'
					>
				>;
			}
	>;
};

export type FindAlarmPlanQueryVariables = {
	entity: FindAlarmPlanInput;
};

export type FindAlarmPlanQuery = { __typename?: 'Query' } & {
	findAlarmPlan: Maybe<
		{ __typename?: 'FindAlarmPlanResult' } & Pick<FindAlarmPlanResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindAlarmPlanData' } & Pick<
						FindAlarmPlanData,
						'id' | 'title' | 'priority' | 'desc' | 'createDate' | 'createUser'
					>
				>;
			}
	>;
};

export type GetAlarmPlanQueryVariables = {};

export type GetAlarmPlanQuery = { __typename?: 'Query' } & {
	getAlarmPlan: Maybe<
		{ __typename?: 'FindPagePermissionResult' } & Pick<FindPagePermissionResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindPagePermissionData' } & Pick<
						FindPagePermissionData,
						'type' | 'roleId' | 'fromSystemId'
					>
				>;
			}
	>;
};

export type FindmenuQueryVariables = {};

export type FindmenuQuery = { __typename?: 'Query' } & {
	findmenu: Maybe<{ __typename?: 'FindMenuResult' } & Pick<FindMenuResult, 'code' | 'message' | 'data'>>;
};

export type FindModuleQueryVariables = {
	entity: FindModuleInput;
};

export type FindModuleQuery = { __typename?: 'Query' } & {
	findModule: Maybe<
		{ __typename?: 'FindModuleResult' } & Pick<FindModuleResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'FindModuleData' } & Pick<
								FindModuleData,
								'id' | 'name' | 'link' | 'status' | 'dataProtocol'
							>
						>
					>
				>;
			}
	>;
};

export type GetModuleQueryVariables = {
	id: Scalars['Int'];
};

export type GetModuleQuery = { __typename?: 'Query' } & {
	getModule: Maybe<
		{ __typename?: 'GetModuleResult' } & Pick<GetModuleResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'GetModuleData' } & Pick<
						GetModuleData,
						'id' | 'name' | 'link' | 'status' | 'dataProtocol'
					>
				>;
			}
	>;
};

export type FindCaptureQueryVariables = {
	entity: FindCaptureInput;
};

export type FindCaptureQuery = { __typename?: 'Query' } & {
	findCapture: Maybe<
		{ __typename?: 'FindCaptureResult' } & Pick<FindCaptureResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindCaptureData' } & Pick<
						FindCaptureData,
						'id' | 'title' | 'aisle' | 'reason' | 'remarks' | 'createDate' | 'createUserName'
					>
				>;
			}
	>;
};

export type FindRoleRightsQueryVariables = {};

export type FindRoleRightsQuery = { __typename?: 'Query' } & {
	findRoleRights: Maybe<
		{ __typename?: 'FindRoleRightsResult' } & Pick<FindRoleRightsResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'FindRoleRightsData' } & Pick<
								FindRoleRightsData,
								'id' | 'code' | 'title'
							> & {
									getRights: Maybe<
										Array<
											Maybe<
												{ __typename?: 'FindRoleRightsSystem' } & Pick<
													FindRoleRightsSystem,
													'id' | 'type' | 'title' | 'code'
												>
											>
										>
									>;
								}
						>
					>
				>;
			}
	>;
};

export type GetPermissionQueryVariables = {};

export type GetPermissionQuery = { __typename?: 'Query' } & {
	getPermission: Maybe<
		{ __typename?: 'GetPermissionResult' } & Pick<GetPermissionResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'GetPermissionSystem' } & Pick<
								GetPermissionSystem,
								'id' | 'title' | 'children'
							>
						>
					>
				>;
			}
	>;
};

export type FindRoleQueryVariables = {
	entity: FindRoleInput;
};

export type FindRoleQuery = { __typename?: 'Query' } & {
	findRole: Maybe<
		{ __typename?: 'FindRoleResult' } & Pick<FindRoleResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'FindRoleDate' } & Pick<
								FindRoleDate,
								| 'id'
								| 'roleName'
								| 'roleIdentification'
								| 'roleDesc'
								| 'dataPermission'
								| 'createUserName'
								| 'parentRole'
								| 'createDate'
							>
						>
					>
				>;
			}
	>;
};

export type GetRoleQueryVariables = {
	entity: GetRoleGroupInput;
};

export type GetRoleQuery = { __typename?: 'Query' } & {
	getRole: Maybe<
		{ __typename?: 'GetRoleResult' } & Pick<GetRoleResult, 'code' | 'message'> & {
				date: Maybe<
					Array<
						Maybe<
							{ __typename?: 'GetRoleData' } & Pick<
								GetRoleData,
								'status' | 'id' | 'title' | 'code' | 'desc' | 'createDate'
							> & {
									rights: Maybe<
										Array<Maybe<{ __typename?: 'Right' } & Pick<Right, 'id' | 'title'>>>
									>;
								}
						>
					>
				>;
			}
	>;
};

export type GetRoleGroupQueryVariables = {
	entity: GetroleGroupInput;
};

export type GetRoleGroupQuery = { __typename?: 'Query' } & {
	getRoleGroup: Maybe<
		{ __typename?: 'GetroleGroupResult' } & Pick<GetroleGroupResult, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'GetRoleGroups' } & Pick<GetRoleGroups, 'id' | 'title' | 'desc'>>;
			}
	>;
};

export type DeleteRoleGroupQueryVariables = {
	entity: DeleteRoleGroupInput;
};

export type DeleteRoleGroupQuery = { __typename?: 'Query' } & {
	deleteRoleGroup: Maybe<
		{ __typename?: 'DeleteRoleGroupResult' } & Pick<DeleteRoleGroupResult, 'code' | 'message'>
	>;
};

export type FindRoundPatrolQueryVariables = {
	entity: FindRoundPatrolInput;
};

export type FindRoundPatrolQuery = { __typename?: 'Query' } & {
	findRoundPatrol: Maybe<
		{ __typename?: 'FinRoundPatrolResult' } & Pick<FinRoundPatrolResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FinRoundPatrolData' } & Pick<
						FinRoundPatrolData,
						'id' | 'title' | 'windows' | 'desc' | 'createDate' | 'createUserName'
					>
				>;
			}
	>;
};

export type GetRoundPatrolQueryVariables = {
	id: Scalars['Int'];
};

export type GetRoundPatrolQuery = { __typename?: 'Query' } & {
	getRoundPatrol: Maybe<
		{ __typename?: 'GetRoundPatrolResult' } & Pick<GetRoundPatrolResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'GetRoundPatrolData' } & Pick<
						GetRoundPatrolData,
						| 'id'
						| 'title'
						| 'screenStyle'
						| 'desc'
						| 'createUserName'
						| 'createUserId'
						| 'createDate'
					> & {
							windowConfig: Array<
								Maybe<
									{ __typename?: 'box' } & Pick<
										Box,
										'id' | 'organiztion' | 'title' | 'codeStream' | 'duration'
									>
								>
							>;
						}
				>;
			}
	>;
};

export type FindStationQueryVariables = {
	entity: FindStationInput;
};

export type FindStationQuery = { __typename?: 'Query' } & {
	findStation: Maybe<
		{ __typename?: 'FindStationResult' } & Pick<FindStationResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'FindStationData' } & Pick<
								FindStationData,
								| 'id'
								| 'positionTitle'
								| 'jobNumber'
								| 'jobDescription'
								| 'haveRole'
								| 'createUserName'
								| 'createDate'
							>
						>
					>
				>;
			}
	>;
};

export type GetStationQueryVariables = {
	id: Scalars['Int'];
};

export type GetStationQuery = { __typename?: 'Query' } & {
	getStation: Maybe<
		{ __typename?: 'GetStationResult' } & Pick<GetStationResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'GetStationData' } & Pick<
						GetStationData,
						| 'jobNumber'
						| 'positionTitle'
						| 'jobDescription'
						| 'jobResponsibilities'
						| 'jobRequirements'
						| 'status'
					> & {
							department: { __typename?: 'GetStationDepartment' } & Pick<
								GetStationDepartment,
								'id' | 'title'
							>;
							roleGroup: { __typename?: 'GetStationRoleGroup' } & Pick<
								GetStationRoleGroup,
								'id' | 'title'
							>;
						}
				>;
			}
	>;
};

export type GetAllDepartmentQueryVariables = {
	entity: GetAllDepartmentInput;
};

export type GetAllDepartmentQuery = { __typename?: 'Query' } & {
	getAllDepartment: Maybe<
		{ __typename?: 'GetAllDepartmentResult' } & Pick<GetAllDepartmentResult, 'code' | 'message' | 'data'>
	>;
};

export type GetAllStationByDepartmentQueryVariables = {
	entity: GetAllStationByDepartmentInput;
};

export type GetAllStationByDepartmentQuery = { __typename?: 'Query' } & {
	getAllStationByDepartment: Maybe<
		{ __typename?: 'GetAllStationByDepartmentResult' } & Pick<
			GetAllStationByDepartmentResult,
			'code' | 'message'
		> & {
				data: Maybe<
					Array<
						Maybe<{ __typename?: 'GetAllStationData' } & Pick<GetAllStationData, 'id' | 'title'>>
					>
				>;
			}
	>;
};

export type GetAllUserByStationQueryVariables = {
	entity: GetAllUserByStationInput;
};

export type GetAllUserByStationQuery = { __typename?: 'Query' } & {
	getAllUserByStation: Maybe<
		{ __typename?: 'GetAllUserByStationResult' } & Pick<GetAllUserByStationResult, 'code' | 'message'> & {
				data: Maybe<
					Array<Maybe<{ __typename?: 'GetAllUSerData' } & Pick<GetAllUSerData, 'title' | 'id'>>>
				>;
			}
	>;
};

export type FindSummaryQueryVariables = {
	entity: FindSummaryInput;
};

export type FindSummaryQuery = { __typename?: 'Query' } & {
	findSummary: Maybe<
		{ __typename?: 'FindSummaryResult' } & Pick<FindSummaryResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindSummaryData' } & Pick<FindSummaryData, 'title' | 'link' | 'date'>
				>;
			}
	>;
};

export type FindSystemQueryVariables = {
	entity?: Maybe<FindSystemInput>;
};

export type FindSystemQuery = { __typename?: 'Query' } & {
	findSystem: Maybe<
		Array<
			Maybe<
				{ __typename?: 'FindSystemResult' } & Pick<FindSystemResult, 'id' | 'title' | 'link'> & {
						rights: { __typename?: 'FindSystemRight' } & Pick<
							FindSystemRight,
							'id' | 'title' | 'type'
						>;
					}
			>
		>
	>;
};

export type GetSystemQueryVariables = {
	id: Scalars['Int'];
};

export type GetSystemQuery = { __typename?: 'Query' } & {
	getSystem: Maybe<
		{ __typename?: 'GetSystemResult' } & Pick<GetSystemResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'GetSystemData' } & Pick<GetSystemData, 'id' | 'title' | 'link'> & {
							rights: Array<
								Maybe<
									{ __typename?: 'GetSystemRight' } & Pick<GetSystemRight, 'id' | 'title'>
								>
							>;
						}
				>;
			}
	>;
};

export type ConfirmUserPasswordQueryVariables = {
	entity: ConfirmUserPasswordInput;
};

export type ConfirmUserPasswordQuery = { __typename?: 'Query' } & {
	confirmUserPassword: Maybe<
		{ __typename?: 'ConfirmUserPasswordResult' } & Pick<ConfirmUserPasswordResult, 'code' | 'message'>
	>;
};

export type FindUserQueryVariables = {
	entity: FindUserInput;
};

export type FindUserQuery = { __typename?: 'Query' } & {
	findUser: Maybe<
		{ __typename?: 'FindUserResult' } & Pick<FindUserResult, 'code' | 'message'> & {
				data: Maybe<
					Array<
						Maybe<
							{ __typename?: 'FindUserData' } & Pick<
								FindUserData,
								| 'id'
								| 'username'
								| 'mobile'
								| 'departmentTitle'
								| 'roles'
								| 'status'
								| 'createDate'
								| 'createUserName'
							>
						>
					>
				>;
			}
	>;
};

export type GetUserQueryVariables = {
	uid: Scalars['Int'];
};

export type GetUserQuery = { __typename?: 'Query' } & {
	getUser: Maybe<
		{ __typename?: 'GetUserResult' } & Pick<GetUserResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'GetUserResultData' } & Pick<
						GetUserResultData,
						'id' | 'username' | 'mobile' | 'email' | 'status' | 'createDate' | 'createUserName'
					> & {
							stations: Maybe<
								Array<
									Maybe<
										{ __typename?: 'GetUsertations' } & Pick<
											GetUsertations,
											'id' | 'title'
										>
									>
								>
							>;
							bindingStaff: Maybe<
								{ __typename?: 'GetUsertations' } & Pick<GetUsertations, 'id' | 'title'>
							>;
						}
				>;
			}
	>;
};

export type FindWallPlanQueryVariables = {
	entity: FindWallPlanInput;
};

export type FindWallPlanQuery = { __typename?: 'Query' } & {
	findWallPlan: Maybe<
		{ __typename?: 'FindWallPlanResult' } & Pick<FindWallPlanResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'FindWallPlanData' } & Pick<
						FindWallPlanData,
						'title' | 'desc' | 'cearteUserName' | 'cearteDate'
					>
				>;
			}
	>;
};

export type VerifyUserTokenMutationVariables = {
	token: Scalars['String'];
	uid: Scalars['Int'];
};

export type VerifyUserTokenMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'verifyUserToken'>;

export type BindUserTokenMutationVariables = {
	entity: BindUserTokenInput;
};

export type BindUserTokenMutation = { __typename?: 'Mutation' } & {
	bindUserToken: Maybe<
		{ __typename?: 'BindUserTokenResult' } & Pick<BindUserTokenResult, 'code' | 'message'>
	>;
};

export type DeleteDomainMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteDomainMutation = { __typename?: 'Mutation' } & {
	deleteDomain: Maybe<{ __typename?: 'DeleteDomainResult' } & Pick<DeleteDomainResult, 'code' | 'message'>>;
};

export type ForbidDomainMutationVariables = {
	entity: ForbidDomainInput;
};

export type ForbidDomainMutation = { __typename?: 'Mutation' } & {
	forbidDomain: Maybe<{ __typename?: 'ForbidDomainResult' } & Pick<ForbidDomainResult, 'code' | 'message'>>;
};

export type SaveDomainMutationVariables = {
	entity: SaveDomainInput;
};

export type SaveDomainMutation = { __typename?: 'Mutation' } & {
	saveDomain: Maybe<{ __typename?: 'SaveDomainResult' } & Pick<SaveDomainResult, 'code' | 'message'>>;
};

export type AddAlarmPlanMutationVariables = {
	id: Scalars['Int'];
};

export type AddAlarmPlanMutation = { __typename?: 'Mutation' } & {
	AddAlarmPlan: Maybe<{ __typename?: 'AddAlarmPlanResult' } & Pick<AddAlarmPlanResult, 'code' | 'message'>>;
};

export type DeleteAlarmPlanMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteAlarmPlanMutation = { __typename?: 'Mutation' } & {
	deleteAlarmPlan: Maybe<
		{ __typename?: 'DeleteAlarmPlanResult' } & Pick<DeleteAlarmPlanResult, 'code' | 'message'>
	>;
};

export type ForbidAlarmPlanMutationVariables = {
	entity: ForbidAlarmPlanInput;
};

export type ForbidAlarmPlanMutation = { __typename?: 'Mutation' } & {
	forbidAlarmPlan: Maybe<
		{ __typename?: 'forbidAlarmPlanResult' } & Pick<ForbidAlarmPlanResult, 'code' | 'message'>
	>;
};

export type SaveAlarmPlanMutationVariables = {};

export type SaveAlarmPlanMutation = { __typename?: 'Mutation' } & {
	saveAlarmPlan: Maybe<
		{ __typename?: 'SaveAlarmPlanResult' } & Pick<SaveAlarmPlanResult, 'code' | 'message'>
	>;
};

export type SaveMenuMutationVariables = {
	entity: SaveMenuInput;
};

export type SaveMenuMutation = { __typename?: 'Mutation' } & {
	saveMenu: Maybe<
		{ __typename?: 'SaveMenuRsesult' } & Pick<SaveMenuRsesult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'SaveMenuData' } & Pick<
						SaveMenuData,
						'menuId' | 'status' | 'icon' | 'title'
					>
				>;
			}
	>;
};

export type DeleteModuleMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteModuleMutation = { __typename?: 'Mutation' } & {
	deleteModule: Maybe<{ __typename?: 'DeleteModuleResult' } & Pick<DeleteModuleResult, 'code' | 'message'>>;
};

export type ForbidModuleMutationVariables = {
	entity: ForbidModuleInput;
};

export type ForbidModuleMutation = { __typename?: 'Mutation' } & {
	forbidModule: Maybe<{ __typename?: 'ForbidModuleResult' } & Pick<ForbidModuleResult, 'code' | 'message'>>;
};

export type DeleteCaptureMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteCaptureMutation = { __typename?: 'Mutation' } & {
	deleteCapture: Maybe<
		{ __typename?: 'DeleteCaptureResult' } & Pick<DeleteCaptureResult, 'code' | 'message'>
	>;
};

export type SaveCaptureMutationVariables = {
	entity: SaveCaptureInput;
};

export type SaveCaptureMutation = { __typename?: 'Mutation' } & {
	saveCapture: Maybe<{ __typename?: 'SaveCaptureResult' } & Pick<SaveCaptureResult, 'code' | 'message'>>;
};

export type AddOrRemoveSystemRightMutationVariables = {
	entity: AddSystemRightInput;
};

export type AddOrRemoveSystemRightMutation = { __typename?: 'Mutation' } & {
	addOrRemoveSystemRight: Maybe<
		{ __typename?: 'AddSystemRightResult' } & Pick<AddSystemRightResult, 'code' | 'message'>
	>;
};

export type SaveRoleRightMutationVariables = {
	entity: SaveRoleRightInput;
};

export type SaveRoleRightMutation = { __typename?: 'Mutation' } & {
	saveRoleRight: Maybe<
		{ __typename?: 'SaveRoleRightResult' } & Pick<SaveRoleRightResult, 'code' | 'message'>
	>;
};

export type DeleteRoleRightMutationVariables = {
	entity: DeleteRoleRightInput;
};

export type DeleteRoleRightMutation = { __typename?: 'Mutation' } & {
	deleteRoleRight: Maybe<
		{ __typename?: 'DeleteRoleRightResult' } & Pick<DeleteRoleRightResult, 'code' | 'message'>
	>;
};

export type SavaRoleMutationVariables = {
	entity: SaveRoleInput;
};

export type SavaRoleMutation = { __typename?: 'Mutation' } & {
	savaRole: Maybe<
		{ __typename?: 'SaveRoleResult' } & Pick<SaveRoleResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'SaveResultData' } & Pick<
						SaveResultData,
						| 'id'
						| 'roleName'
						| 'roleIdentification'
						| 'roleDescription'
						| 'status'
						| 'createDate'
						| 'createUserName'
					> & {
							basicRole: Array<Maybe<{ __typename?: 'Role' } & Pick<Role, 'title' | 'id'>>>;
							mutexRole: Array<Maybe<{ __typename?: 'Role' } & Pick<Role, 'title' | 'id'>>>;
						}
				>;
			}
	>;
};

export type DeleteRoundPatrolMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteRoundPatrolMutation = { __typename?: 'Mutation' } & {
	deleteRoundPatrol: Maybe<
		{ __typename?: 'DeleteRoundPatrolResult' } & Pick<DeleteRoundPatrolResult, 'code' | 'message'>
	>;
};

export type SaveRoundPatrolMutationVariables = {
	entity: SaveRoundPatrolInput;
};

export type SaveRoundPatrolMutation = { __typename?: 'Mutation' } & {
	saveRoundPatrol: Maybe<
		{ __typename?: 'SaveRoundPatrolResult' } & Pick<SaveRoundPatrolResult, 'code' | 'message'>
	>;
};

export type DeleteStationMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteStationMutation = { __typename?: 'Mutation' } & {
	deleteStation: Maybe<
		{ __typename?: 'DeleteStationResult' } & Pick<DeleteStationResult, 'code' | 'message'>
	>;
};

export type ForbidStationMutationVariables = {
	entity: ForbidStationInput;
};

export type ForbidStationMutation = { __typename?: 'Mutation' } & {
	forbidStation: Maybe<
		{ __typename?: 'ForbidStationResult' } & Pick<ForbidStationResult, 'code' | 'message'>
	>;
};

export type SaveDepartmentMutationVariables = {
	entity: SaveDepartmentInput;
};

export type SaveDepartmentMutation = { __typename?: 'Mutation' } & {
	saveDepartment: Maybe<
		{ __typename?: 'SaveDepartmentResult' } & Pick<SaveDepartmentResult, 'code' | 'message' | 'data'>
	>;
};

export type SaveStationMutationVariables = {
	entity: SaveStationInput;
};

export type SaveStationMutation = { __typename?: 'Mutation' } & {
	saveStation: Maybe<{ __typename?: 'SaveStationResult' } & Pick<SaveStationResult, 'code' | 'message'>>;
};

export type DeleteDepartmentMutationVariables = {
	entity: DeleteDepartmentInput;
};

export type DeleteDepartmentMutation = { __typename?: 'Mutation' } & {
	deleteDepartment: Maybe<
		{ __typename?: 'DeleteDepartmentResult' } & Pick<DeleteDepartmentResult, 'code' | 'message'>
	>;
};

export type DeleteStationUserMutationVariables = {
	entity: DeleteStationUserInput;
};

export type DeleteStationUserMutation = { __typename?: 'Mutation' } & {
	deleteStationUser: Maybe<
		{ __typename?: 'DeleteStationUserResult' } & Pick<DeleteStationUserResult, 'code' | 'message'>
	>;
};

export type AddStationUserMutationVariables = {
	entity: AddStationUserInput;
};

export type AddStationUserMutation = { __typename?: 'Mutation' } & {
	addStationUser: Maybe<
		{ __typename?: 'AddStationUserResult' } & Pick<AddStationUserResult, 'code' | 'message'>
	>;
};

export type SaveSummaryMutationVariables = {
	entity: SaveSummaryInput;
};

export type SaveSummaryMutation = { __typename?: 'Mutation' } & {
	saveSummary: Maybe<{ __typename?: 'SaveSummaryResult' } & Pick<SaveSummaryResult, 'code' | 'message'>>;
};

export type DeleteUserMutationVariables = {
	uid: Scalars['Int'];
};

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
	deleteUser: Maybe<{ __typename?: 'DeleteUserResult' } & Pick<DeleteUserResult, 'code' | 'message'>>;
};

export type ForbidUserMutationVariables = {
	entity: ForbidUserInput;
};

export type ForbidUserMutation = { __typename?: 'Mutation' } & {
	forbidUser: Maybe<{ __typename?: 'ForbidUserResult' } & Pick<ForbidUserResult, 'code' | 'message'>>;
};

export type SaveUserMutationVariables = {
	entity: SaveUserInput;
};

export type SaveUserMutation = { __typename?: 'Mutation' } & {
	saveUser: Maybe<
		{ __typename?: 'SaveUserResult' } & Pick<SaveUserResult, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'SaveUserData' } & Pick<
						SaveUserData,
						'id' | 'username' | 'mobile' | 'email' | 'renGang' | 'bindingStaff'
					>
				>;
			}
	>;
};

export type UpdateUserPasswordMutationVariables = {
	entity: UpdateUserPasswordInput;
};

export type UpdateUserPasswordMutation = { __typename?: 'Mutation' } & {
	updateUserPassword: Maybe<
		{ __typename?: 'UpdateUserPasswordResult' } & Pick<UpdateUserPasswordResult, 'code' | 'message'>
	>;
};

export type DeleteWallPlanMutationVariables = {
	id: Scalars['Int'];
};

export type DeleteWallPlanMutation = { __typename?: 'Mutation' } & {
	deleteWallPlan: Maybe<
		{ __typename?: 'DeleteWallPlanResult' } & Pick<DeleteWallPlanResult, 'code' | 'message'>
	>;
};

export type SaveWallPlanMutationVariables = {
	entity: SaveWallPlanInput;
};

export type SaveWallPlanMutation = { __typename?: 'Mutation' } & {
	saveWallPlan: Maybe<{ __typename?: 'saveWallPlanResult' } & Pick<SaveWallPlanResult, 'code' | 'message'>>;
};

export const GetWelcomeInfoDocument = gql`
	query getWelcomeInfo {
		getWelcomeInfo {
			image
			title
			secondTitle
			desc
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetWelcomeInfoGQL extends Apollo.Query<GetWelcomeInfoQuery, GetWelcomeInfoQueryVariables> {
	document = GetWelcomeInfoDocument;
}
export const GetWelcomeToDoItemsDocument = gql`
	query getWelcomeToDoItems {
		getWelcomeToDoItems {
			today {
				title
				events {
					id
					title
					desc
					count
				}
			}
			yestoday {
				title
				events {
					id
					title
					desc
					count
				}
			}
			thisweek {
				title
				events {
					id
					title
					desc
					count
				}
			}
			lastweek {
				title
				events {
					id
					title
					desc
					count
				}
			}
			within30Days {
				title
				events {
					id
					title
					desc
					count
				}
			}
			thirtyDaysAgo {
				title
				events {
					id
					title
					desc
					count
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetWelcomeToDoItemsGQL extends Apollo.Query<
	GetWelcomeToDoItemsQuery,
	GetWelcomeToDoItemsQueryVariables
> {
	document = GetWelcomeToDoItemsDocument;
}
export const GetWelcomeSystemsDocument = gql`
	query getWelcomeSystems {
		getWelcomeSystems {
			image
			title
			link
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetWelcomeSystemsGQL extends Apollo.Query<
	GetWelcomeSystemsQuery,
	GetWelcomeSystemsQueryVariables
> {
	document = GetWelcomeSystemsDocument;
}
export const CreateRandomCodeDocument = gql`
	query createRandomCode {
		createRandomCode
	}
`;

@Injectable({
	providedIn: 'root'
})
export class CreateRandomCodeGQL extends Apollo.Query<CreateRandomCodeQuery, CreateRandomCodeQueryVariables> {
	document = CreateRandomCodeDocument;
}
export const CheckUserStateDocument = gql`
	query checkUserState($username: String!) {
		checkUserState(username: $username) {
			code
			message
			data {
				id
				uid
				randomCode
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class CheckUserStateGQL extends Apollo.Query<CheckUserStateQuery, CheckUserStateQueryVariables> {
	document = CheckUserStateDocument;
}
export const LoginDocument = gql`
	query login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			code
			message
			token
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
	document = LoginDocument;
}
export const FindDomainDocument = gql`
	query findDomain($entity: FindDomainInput!) {
		findDomain(entity: $entity) {
			code
			message
			data {
				count
				list {
					desc
					id
					title
					code
					status
					createDate
					createUserName
					createUserId
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindDomainGQL extends Apollo.Query<FindDomainQuery, FindDomainQueryVariables> {
	document = FindDomainDocument;
}
export const GetDomainDocument = gql`
	query getDomain($id: Int!) {
		getDomain(id: $id) {
			code
			message
			data {
				id
				code
				title
				desc
				createDate
				createUserName
				createUserId
				status
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetDomainGQL extends Apollo.Query<GetDomainQuery, GetDomainQueryVariables> {
	document = GetDomainDocument;
}
export const FindAlarmPlanDocument = gql`
	query findAlarmPlan($entity: FindAlarmPlanInput!) {
		findAlarmPlan(entity: $entity) {
			code
			message
			data {
				id
				title
				priority
				desc
				createDate
				createUser
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindAlarmPlanGQL extends Apollo.Query<FindAlarmPlanQuery, FindAlarmPlanQueryVariables> {
	document = FindAlarmPlanDocument;
}
export const GetAlarmPlanDocument = gql`
	query getAlarmPlan {
		getAlarmPlan {
			code
			message
			data {
				type
				roleId
				fromSystemId
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetAlarmPlanGQL extends Apollo.Query<GetAlarmPlanQuery, GetAlarmPlanQueryVariables> {
	document = GetAlarmPlanDocument;
}
export const FindmenuDocument = gql`
	query findmenu {
		findmenu {
			code
			message
			data
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindmenuGQL extends Apollo.Query<FindmenuQuery, FindmenuQueryVariables> {
	document = FindmenuDocument;
}
export const FindModuleDocument = gql`
	query findModule($entity: FindModuleInput!) {
		findModule(entity: $entity) {
			code
			message
			data {
				id
				name
				link
				status
				dataProtocol
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindModuleGQL extends Apollo.Query<FindModuleQuery, FindModuleQueryVariables> {
	document = FindModuleDocument;
}
export const GetModuleDocument = gql`
	query getModule($id: Int!) {
		getModule(id: $id) {
			code
			message
			data {
				id
				name
				link
				status
				dataProtocol
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetModuleGQL extends Apollo.Query<GetModuleQuery, GetModuleQueryVariables> {
	document = GetModuleDocument;
}
export const FindCaptureDocument = gql`
	query findCapture($entity: FindCaptureInput!) {
		findCapture(entity: $entity) {
			code
			message
			data {
				id
				title
				aisle
				reason
				remarks
				createDate
				createUserName
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindCaptureGQL extends Apollo.Query<FindCaptureQuery, FindCaptureQueryVariables> {
	document = FindCaptureDocument;
}
export const FindRoleRightsDocument = gql`
	query findRoleRights {
		findRoleRights {
			code
			message
			data {
				id
				code
				title
				getRights {
					id
					type
					title
					code
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindRoleRightsGQL extends Apollo.Query<FindRoleRightsQuery, FindRoleRightsQueryVariables> {
	document = FindRoleRightsDocument;
}
export const GetPermissionDocument = gql`
	query getPermission {
		getPermission {
			data {
				id
				title
				children
			}
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetPermissionGQL extends Apollo.Query<GetPermissionQuery, GetPermissionQueryVariables> {
	document = GetPermissionDocument;
}
export const FindRoleDocument = gql`
	query findRole($entity: FindRoleInput!) {
		findRole(entity: $entity) {
			code
			message
			data {
				id
				roleName
				roleIdentification
				roleDesc
				dataPermission
				createUserName
				parentRole
				createDate
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindRoleGQL extends Apollo.Query<FindRoleQuery, FindRoleQueryVariables> {
	document = FindRoleDocument;
}
export const GetRoleDocument = gql`
	query getRole($entity: GetRoleGroupInput!) {
		getRole(entity: $entity) {
			code
			message
			date {
				status
				id
				title
				code
				desc
				rights {
					id
					title
				}
				createDate
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetRoleGQL extends Apollo.Query<GetRoleQuery, GetRoleQueryVariables> {
	document = GetRoleDocument;
}
export const GetRoleGroupDocument = gql`
	query getRoleGroup($entity: GetroleGroupInput!) {
		getRoleGroup(entity: $entity) {
			code
			message
			data {
				id
				title
				desc
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetRoleGroupGQL extends Apollo.Query<GetRoleGroupQuery, GetRoleGroupQueryVariables> {
	document = GetRoleGroupDocument;
}
export const DeleteRoleGroupDocument = gql`
	query deleteRoleGroup($entity: DeleteRoleGroupInput!) {
		deleteRoleGroup(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteRoleGroupGQL extends Apollo.Query<DeleteRoleGroupQuery, DeleteRoleGroupQueryVariables> {
	document = DeleteRoleGroupDocument;
}
export const FindRoundPatrolDocument = gql`
	query findRoundPatrol($entity: FindRoundPatrolInput!) {
		findRoundPatrol(entity: $entity) {
			code
			message
			data {
				id
				title
				windows
				desc
				createDate
				createUserName
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindRoundPatrolGQL extends Apollo.Query<FindRoundPatrolQuery, FindRoundPatrolQueryVariables> {
	document = FindRoundPatrolDocument;
}
export const GetRoundPatrolDocument = gql`
	query getRoundPatrol($id: Int!) {
		getRoundPatrol(id: $id) {
			code
			message
			data {
				id
				title
				screenStyle
				desc
				createUserName
				createUserId
				createDate
				windowConfig {
					id
					organiztion
					title
					codeStream
					duration
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetRoundPatrolGQL extends Apollo.Query<GetRoundPatrolQuery, GetRoundPatrolQueryVariables> {
	document = GetRoundPatrolDocument;
}
export const FindStationDocument = gql`
	query findStation($entity: FindStationInput!) {
		findStation(entity: $entity) {
			code
			message
			data {
				id
				positionTitle
				jobNumber
				jobDescription
				haveRole
				createUserName
				createDate
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindStationGQL extends Apollo.Query<FindStationQuery, FindStationQueryVariables> {
	document = FindStationDocument;
}
export const GetStationDocument = gql`
	query getStation($id: Int!) {
		getStation(id: $id) {
			code
			message
			data {
				department {
					id
					title
				}
				jobNumber
				positionTitle
				jobDescription
				jobResponsibilities
				jobRequirements
				roleGroup {
					id
					title
				}
				status
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetStationGQL extends Apollo.Query<GetStationQuery, GetStationQueryVariables> {
	document = GetStationDocument;
}
export const GetAllDepartmentDocument = gql`
	query getAllDepartment($entity: GetAllDepartmentInput!) {
		getAllDepartment(entity: $entity) {
			code
			message
			data
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetAllDepartmentGQL extends Apollo.Query<GetAllDepartmentQuery, GetAllDepartmentQueryVariables> {
	document = GetAllDepartmentDocument;
}
export const GetAllStationByDepartmentDocument = gql`
	query getAllStationByDepartment($entity: GetAllStationByDepartmentInput!) {
		getAllStationByDepartment(entity: $entity) {
			code
			message
			data {
				id
				title
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetAllStationByDepartmentGQL extends Apollo.Query<
	GetAllStationByDepartmentQuery,
	GetAllStationByDepartmentQueryVariables
> {
	document = GetAllStationByDepartmentDocument;
}
export const GetAllUserByStationDocument = gql`
	query getAllUserByStation($entity: GetAllUserByStationInput!) {
		getAllUserByStation(entity: $entity) {
			code
			message
			data {
				title
				id
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetAllUserByStationGQL extends Apollo.Query<
	GetAllUserByStationQuery,
	GetAllUserByStationQueryVariables
> {
	document = GetAllUserByStationDocument;
}
export const FindSummaryDocument = gql`
	query findSummary($entity: FindSummaryInput!) {
		findSummary(entity: $entity) {
			code
			message
			data {
				title
				link
				date
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindSummaryGQL extends Apollo.Query<FindSummaryQuery, FindSummaryQueryVariables> {
	document = FindSummaryDocument;
}
export const FindSystemDocument = gql`
	query findSystem($entity: FindSystemInput) {
		findSystem(entity: $entity) {
			id
			title
			link
			rights {
				id
				title
				type
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindSystemGQL extends Apollo.Query<FindSystemQuery, FindSystemQueryVariables> {
	document = FindSystemDocument;
}
export const GetSystemDocument = gql`
	query getSystem($id: Int!) {
		getSystem(id: $id) {
			code
			message
			data {
				id
				title
				link
				rights {
					id
					title
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetSystemGQL extends Apollo.Query<GetSystemQuery, GetSystemQueryVariables> {
	document = GetSystemDocument;
}
export const ConfirmUserPasswordDocument = gql`
	query confirmUserPassword($entity: ConfirmUserPasswordInput!) {
		confirmUserPassword(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ConfirmUserPasswordGQL extends Apollo.Query<
	ConfirmUserPasswordQuery,
	ConfirmUserPasswordQueryVariables
> {
	document = ConfirmUserPasswordDocument;
}
export const FindUserDocument = gql`
	query findUser($entity: FindUserInput!) {
		findUser(entity: $entity) {
			code
			message
			data {
				id
				username
				mobile
				departmentTitle
				roles
				status
				createDate
				createUserName
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindUserGQL extends Apollo.Query<FindUserQuery, FindUserQueryVariables> {
	document = FindUserDocument;
}
export const GetUserDocument = gql`
	query getUser($uid: Int!) {
		getUser(uid: $uid) {
			code
			message
			data {
				id
				username
				mobile
				email
				stations {
					id
					title
				}
				bindingStaff {
					id
					title
				}
				status
				createDate
				createUserName
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
	document = GetUserDocument;
}
export const FindWallPlanDocument = gql`
	query findWallPlan($entity: FindWallPlanInput!) {
		findWallPlan(entity: $entity) {
			code
			message
			data {
				title
				desc
				cearteUserName
				cearteDate
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class FindWallPlanGQL extends Apollo.Query<FindWallPlanQuery, FindWallPlanQueryVariables> {
	document = FindWallPlanDocument;
}
export const VerifyUserTokenDocument = gql`
	mutation verifyUserToken($token: String!, $uid: Int!) {
		verifyUserToken(token: $token, uid: $uid)
	}
`;

@Injectable({
	providedIn: 'root'
})
export class VerifyUserTokenGQL extends Apollo.Mutation<
	VerifyUserTokenMutation,
	VerifyUserTokenMutationVariables
> {
	document = VerifyUserTokenDocument;
}
export const BindUserTokenDocument = gql`
	mutation bindUserToken($entity: BindUserTokenInput!) {
		bindUserToken(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class BindUserTokenGQL extends Apollo.Mutation<BindUserTokenMutation, BindUserTokenMutationVariables> {
	document = BindUserTokenDocument;
}
export const DeleteDomainDocument = gql`
	mutation deleteDomain($id: Int!) {
		deleteDomain(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteDomainGQL extends Apollo.Mutation<DeleteDomainMutation, DeleteDomainMutationVariables> {
	document = DeleteDomainDocument;
}
export const ForbidDomainDocument = gql`
	mutation forbidDomain($entity: ForbidDomainInput!) {
		forbidDomain(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ForbidDomainGQL extends Apollo.Mutation<ForbidDomainMutation, ForbidDomainMutationVariables> {
	document = ForbidDomainDocument;
}
export const SaveDomainDocument = gql`
	mutation saveDomain($entity: SaveDomainInput!) {
		saveDomain(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveDomainGQL extends Apollo.Mutation<SaveDomainMutation, SaveDomainMutationVariables> {
	document = SaveDomainDocument;
}
export const AddAlarmPlanDocument = gql`
	mutation AddAlarmPlan($id: Int!) {
		AddAlarmPlan(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class AddAlarmPlanGQL extends Apollo.Mutation<AddAlarmPlanMutation, AddAlarmPlanMutationVariables> {
	document = AddAlarmPlanDocument;
}
export const DeleteAlarmPlanDocument = gql`
	mutation deleteAlarmPlan($id: Int!) {
		deleteAlarmPlan(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteAlarmPlanGQL extends Apollo.Mutation<
	DeleteAlarmPlanMutation,
	DeleteAlarmPlanMutationVariables
> {
	document = DeleteAlarmPlanDocument;
}
export const ForbidAlarmPlanDocument = gql`
	mutation forbidAlarmPlan($entity: ForbidAlarmPlanInput!) {
		forbidAlarmPlan(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ForbidAlarmPlanGQL extends Apollo.Mutation<
	ForbidAlarmPlanMutation,
	ForbidAlarmPlanMutationVariables
> {
	document = ForbidAlarmPlanDocument;
}
export const SaveAlarmPlanDocument = gql`
	mutation saveAlarmPlan {
		saveAlarmPlan {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveAlarmPlanGQL extends Apollo.Mutation<SaveAlarmPlanMutation, SaveAlarmPlanMutationVariables> {
	document = SaveAlarmPlanDocument;
}
export const SaveMenuDocument = gql`
	mutation saveMenu($entity: SaveMenuInput!) {
		saveMenu(entity: $entity) {
			code
			message
			data {
				menuId
				status
				icon
				title
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveMenuGQL extends Apollo.Mutation<SaveMenuMutation, SaveMenuMutationVariables> {
	document = SaveMenuDocument;
}
export const DeleteModuleDocument = gql`
	mutation deleteModule($id: Int!) {
		deleteModule(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteModuleGQL extends Apollo.Mutation<DeleteModuleMutation, DeleteModuleMutationVariables> {
	document = DeleteModuleDocument;
}
export const ForbidModuleDocument = gql`
	mutation forbidModule($entity: ForbidModuleInput!) {
		forbidModule(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ForbidModuleGQL extends Apollo.Mutation<ForbidModuleMutation, ForbidModuleMutationVariables> {
	document = ForbidModuleDocument;
}
export const DeleteCaptureDocument = gql`
	mutation deleteCapture($id: Int!) {
		deleteCapture(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteCaptureGQL extends Apollo.Mutation<DeleteCaptureMutation, DeleteCaptureMutationVariables> {
	document = DeleteCaptureDocument;
}
export const SaveCaptureDocument = gql`
	mutation saveCapture($entity: SaveCaptureInput!) {
		saveCapture(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveCaptureGQL extends Apollo.Mutation<SaveCaptureMutation, SaveCaptureMutationVariables> {
	document = SaveCaptureDocument;
}
export const AddOrRemoveSystemRightDocument = gql`
	mutation addOrRemoveSystemRight($entity: AddSystemRightInput!) {
		addOrRemoveSystemRight(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class AddOrRemoveSystemRightGQL extends Apollo.Mutation<
	AddOrRemoveSystemRightMutation,
	AddOrRemoveSystemRightMutationVariables
> {
	document = AddOrRemoveSystemRightDocument;
}
export const SaveRoleRightDocument = gql`
	mutation saveRoleRight($entity: SaveRoleRightInput!) {
		saveRoleRight(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveRoleRightGQL extends Apollo.Mutation<SaveRoleRightMutation, SaveRoleRightMutationVariables> {
	document = SaveRoleRightDocument;
}
export const DeleteRoleRightDocument = gql`
	mutation deleteRoleRight($entity: DeleteRoleRightInput!) {
		deleteRoleRight(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteRoleRightGQL extends Apollo.Mutation<
	DeleteRoleRightMutation,
	DeleteRoleRightMutationVariables
> {
	document = DeleteRoleRightDocument;
}
export const SavaRoleDocument = gql`
	mutation savaRole($entity: SaveRoleInput!) {
		savaRole(entity: $entity) {
			code
			message
			data {
				id
				roleName
				roleIdentification
				roleDescription
				basicRole {
					title
					id
				}
				mutexRole {
					title
					id
				}
				status
				createDate
				createUserName
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SavaRoleGQL extends Apollo.Mutation<SavaRoleMutation, SavaRoleMutationVariables> {
	document = SavaRoleDocument;
}
export const DeleteRoundPatrolDocument = gql`
	mutation deleteRoundPatrol($id: Int!) {
		deleteRoundPatrol(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteRoundPatrolGQL extends Apollo.Mutation<
	DeleteRoundPatrolMutation,
	DeleteRoundPatrolMutationVariables
> {
	document = DeleteRoundPatrolDocument;
}
export const SaveRoundPatrolDocument = gql`
	mutation saveRoundPatrol($entity: SaveRoundPatrolInput!) {
		saveRoundPatrol(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveRoundPatrolGQL extends Apollo.Mutation<
	SaveRoundPatrolMutation,
	SaveRoundPatrolMutationVariables
> {
	document = SaveRoundPatrolDocument;
}
export const DeleteStationDocument = gql`
	mutation deleteStation($id: Int!) {
		deleteStation(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteStationGQL extends Apollo.Mutation<DeleteStationMutation, DeleteStationMutationVariables> {
	document = DeleteStationDocument;
}
export const ForbidStationDocument = gql`
	mutation forbidStation($entity: ForbidStationInput!) {
		forbidStation(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ForbidStationGQL extends Apollo.Mutation<ForbidStationMutation, ForbidStationMutationVariables> {
	document = ForbidStationDocument;
}
export const SaveDepartmentDocument = gql`
	mutation saveDepartment($entity: SaveDepartmentInput!) {
		saveDepartment(entity: $entity) {
			code
			message
			data
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveDepartmentGQL extends Apollo.Mutation<
	SaveDepartmentMutation,
	SaveDepartmentMutationVariables
> {
	document = SaveDepartmentDocument;
}
export const SaveStationDocument = gql`
	mutation saveStation($entity: SaveStationInput!) {
		saveStation(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveStationGQL extends Apollo.Mutation<SaveStationMutation, SaveStationMutationVariables> {
	document = SaveStationDocument;
}
export const DeleteDepartmentDocument = gql`
	mutation deleteDepartment($entity: DeleteDepartmentInput!) {
		deleteDepartment(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteDepartmentGQL extends Apollo.Mutation<
	DeleteDepartmentMutation,
	DeleteDepartmentMutationVariables
> {
	document = DeleteDepartmentDocument;
}
export const DeleteStationUserDocument = gql`
	mutation deleteStationUser($entity: DeleteStationUserInput!) {
		deleteStationUser(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteStationUserGQL extends Apollo.Mutation<
	DeleteStationUserMutation,
	DeleteStationUserMutationVariables
> {
	document = DeleteStationUserDocument;
}
export const AddStationUserDocument = gql`
	mutation addStationUser($entity: AddStationUserInput!) {
		addStationUser(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class AddStationUserGQL extends Apollo.Mutation<
	AddStationUserMutation,
	AddStationUserMutationVariables
> {
	document = AddStationUserDocument;
}
export const SaveSummaryDocument = gql`
	mutation saveSummary($entity: SaveSummaryInput!) {
		saveSummary(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveSummaryGQL extends Apollo.Mutation<SaveSummaryMutation, SaveSummaryMutationVariables> {
	document = SaveSummaryDocument;
}
export const DeleteUserDocument = gql`
	mutation deleteUser($uid: Int!) {
		deleteUser(uid: $uid) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
	document = DeleteUserDocument;
}
export const ForbidUserDocument = gql`
	mutation forbidUser($entity: ForbidUserInput!) {
		forbidUser(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ForbidUserGQL extends Apollo.Mutation<ForbidUserMutation, ForbidUserMutationVariables> {
	document = ForbidUserDocument;
}
export const SaveUserDocument = gql`
	mutation saveUser($entity: SaveUserInput!) {
		saveUser(entity: $entity) {
			code
			message
			data {
				id
				username
				mobile
				email
				renGang
				bindingStaff
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveUserGQL extends Apollo.Mutation<SaveUserMutation, SaveUserMutationVariables> {
	document = SaveUserDocument;
}
export const UpdateUserPasswordDocument = gql`
	mutation updateUserPassword($entity: UpdateUserPasswordInput!) {
		updateUserPassword(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UpdateUserPasswordGQL extends Apollo.Mutation<
	UpdateUserPasswordMutation,
	UpdateUserPasswordMutationVariables
> {
	document = UpdateUserPasswordDocument;
}
export const DeleteWallPlanDocument = gql`
	mutation deleteWallPlan($id: Int!) {
		deleteWallPlan(id: $id) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DeleteWallPlanGQL extends Apollo.Mutation<
	DeleteWallPlanMutation,
	DeleteWallPlanMutationVariables
> {
	document = DeleteWallPlanDocument;
}
export const SaveWallPlanDocument = gql`
	mutation saveWallPlan($entity: saveWallPlanInput!) {
		saveWallPlan(entity: $entity) {
			code
			message
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SaveWallPlanGQL extends Apollo.Mutation<SaveWallPlanMutation, SaveWallPlanMutationVariables> {
	document = SaveWallPlanDocument;
}
export interface IntrospectionResultData {
	__schema: {
		types: {
			kind: string;
			name: string;
			possibleTypes: {
				name: string;
			}[];
		}[];
	};
}

const result: IntrospectionResultData = {
	__schema: {
		types: []
	}
};

export default result;
