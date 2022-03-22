import geoip from 'geoip-lite';

export default (req, res) => {
    let ip = req.headers['X-Forwarded-For'];
    let geo = geoip.lookup(ip);

    res.status(200).json({ip});
}