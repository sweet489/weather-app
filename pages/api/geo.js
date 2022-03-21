import geoip from 'geoip-lite';

export default (req, res) => {
    var ip = req.ip;
    var geo = geoip.lookup(ip);

    res.status(200).json({geo});
}