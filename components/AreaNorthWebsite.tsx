
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Shield, MapPin, Users, Radio } from "lucide-react";

export default function AreaNorthWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Area North Roleplay
        </motion.h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          A serious ER:LC roleplay server based in North London.
        </p>
        <div className="flex justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-2xl px-6 py-3">Get Involved</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-2xl px-6 py-3 bg-transparent border border-sky-400 text-sky-400">
              Join Our Discord
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-6">
        {[
          { icon: <MapPin />, title: "North London", desc: "Realistic setting" },
          { icon: <Shield />, title: "Professional RP", desc: "High standards" },
          { icon: <Radio />, title: "Emergency Services", desc: "Police, NHS, Fire" },
          { icon: <Users />, title: "Community", desc: "Active members" }
        ].map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 text-sky-400">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <footer className="border-t border-slate-700 py-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Area North Roleplay
      </footer>
    </div>
  );
}
