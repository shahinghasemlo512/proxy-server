const axios = require('axios');

   module.exports = async (req, res) => {
     const url = req.query.url;
     if (!url) {
       return res.status(400).json({ error: 'URL is required' });
     }

     try {
       const response = await axios.get(url, {
         headers: {
           'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
           'Cache-Control': 'no-cache, no-store, must-revalidate',
           'Pragma': 'no-cache',
           'Expires': '0'
         }
       });
       res.setHeader('Content-Type', 'text/html');
       res.send(response.data);
     } catch (error) {
       console.error(`Error fetching ${url}:`, error.message);
       res.status(500).json({ error: 'Failed to fetch data' });
     }
   };
