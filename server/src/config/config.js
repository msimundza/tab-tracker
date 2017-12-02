const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'tabtracker',
		user: process.env.DB_USER || 'tabtracker',
		password: process.env.DB_PASS || 'tabtracker',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './tabtracker.sqlite',
			operatorsAliases: {
				$eq: Op.eq,
				$ne: Op.ne,
				$gte: Op.gte,
				$gt: Op.gt,
				$lte: Op.lte,
				$lt: Op.lt,
				$not: Op.not,
				$in: Op.in,
				$notIn: Op.notIn,
				$is: Op.is,
				$like: Op.like,
				$notLike: Op.notLike,
				$iLike: Op.iLike,
				$notILike: Op.notILike,
				$regexp: Op.regexp,
				$notRegexp: Op.notRegexp,
				$iRegexp: Op.iRegexp,
				$notIRegexp: Op.notIRegexp,
				$between: Op.between,
				$notBetween: Op.notBetween,
				$overlap: Op.overlap,
				$contains: Op.contains,
				$contained: Op.contained,
				$adjacent: Op.adjacent,
				$strictLeft: Op.strictLeft,
				$strictRight: Op.strictRight,
				$noExtendRight: Op.noExtendRight,
				$noExtendLeft: Op.noExtendLeft,
				$and: Op.and,
				$or: Op.or,
				$any: Op.any,
				$all: Op.all,
				$values: Op.values,
				$col: Op.col
			}
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}