import express from "express";
import cors from "cors";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zlwhimyudjnvvxenfmbp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsd2hpbXl1ZGpudnZ4ZW5mbWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyOTg5MjEsImV4cCI6MjAwMDg3NDkyMX0.AdRgarGYgurGshMbli767RNpUem6b2Lwa2sp2BnKthI";
export const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = 3001;

// Configure middleware, routes, and other server settings
app.use(cors());
app.use(express.json());

app.get("/api/test", async (req, res) => {
  const { data, error } = await supabase.from("anji").select();

  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
