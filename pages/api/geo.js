import geoip from 'geoip-lite';

export default (req, res) => {
    let ip = req.connection.remoteAddress;
    let geo = geoip.lookup(ip);

    res.status(200).json({ip});
}