import ssh from '@server/ssh'

export default async function (req, res) {
	res.json({ ok: !!(await ssh('dokku')) })
}
