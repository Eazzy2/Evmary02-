import { useState, useMemo, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Users, 
  Calendar, 
  TrendingUp, 
  Code2, 
  GraduationCap, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Info,
  Send,
  Activity,
  LayoutDashboard,
  ArrowUpRight,
  Circle,
  ClipboardList,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { VCLP_DATA, CATEGORIES, RoleHolder } from "./data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const CATEGORY_ICONS: Record<string, any> = {
  "Community Operations": Users,
  "Events & Engagement": Calendar,
  "Growth & Partnerships": TrendingUp,
  "Builder & Technical Ecosystem": Code2,
  "Market Research & Crypto Education": GraduationCap,
  "Content & Media": MessageSquare,
  "Data & Analytics": BarChart3,
  "Top Management": ShieldCheck,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Community Operations": "from-blue-500 to-cyan-400",
  "Events & Engagement": "from-purple-500 to-pink-400",
  "Growth & Partnerships": "from-green-500 to-emerald-400",
  "Builder & Technical Ecosystem": "from-orange-500 to-amber-400",
  "Market Research & Crypto Education": "from-indigo-500 to-blue-400",
  "Content & Media": "from-rose-500 to-red-400",
  "Data & Analytics": "from-cyan-500 to-teal-400",
  "Top Management": "from-amber-500 to-yellow-400",
};

const ENGAGEMENT_DATA = [
  { name: 'Mon', visits: 12 },
  { name: 'Tue', visits: 15 },
  { name: 'Wed', visits: 10 },
  { name: 'Thu', visits: 28 },
  { name: 'Fri', visits: 12 },
  { name: 'Sat', visits: 8 },
  { name: 'Sun', visits: 24 },
];

interface Submission {
  id: string;
  name: string;
  telegram: string;
  role: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
  date: string;
}

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: "1",
    name: "Alex Rivera",
    telegram: "@arivera_verse",
    role: "Community Support",
    reason: "I've been a member for 6 months and want to help new users navigate the ecosystem.",
    status: "pending",
    date: "2024-04-12"
  },
  {
    id: "2",
    name: "Sarah Chen",
    telegram: "@schen_crypto",
    role: "Graphic Design",
    reason: "Professional designer with 5 years experience. Love the Verse aesthetic.",
    status: "approved",
    date: "2024-04-10"
  },
  {
    id: "3",
    name: "Marcus Thorne",
    telegram: "@mthorne_dev",
    role: "Vibe Coding Expert",
    reason: "Expert in React and AI-driven development. Want to contribute to the builder ecosystem.",
    status: "pending",
    date: "2024-04-13"
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [view, setView] = useState<"directory" | "analytics" | "submissions">("directory");
  const [submissions, setSubmissions] = useState<Submission[]>(MOCK_SUBMISSIONS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    role: "",
    reason: ""
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newSubmission: Submission = {
        id: (submissions.length + 1).toString(),
        ...formData,
        status: "pending",
        date: new Date().toISOString().split('T')[0]
      };
      setSubmissions([newSubmission, ...submissions]);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", telegram: "", role: "", reason: "" });
    }, 1500);
  };

  const filteredData = useMemo(() => {
    return VCLP_DATA.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.holder.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-mesh selection:bg-verse-purple/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass border-b border-white/5 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.4)] border-2 border-white/20">
                <img 
                  src="https://i.ibb.co/tTSRYR7X/IMG-1530.jpg" 
                  alt="Verse Logo" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  Verse <span className="text-gradient">VCLP</span>
                </h1>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Leadership Hub
                </p>
              </div>
            </div>

            <div className="hidden md:flex bg-white/5 p-1 rounded-lg border border-white/10">
              <Button 
                variant={view === "directory" ? "secondary" : "ghost"} 
                size="sm" 
                onClick={() => setView("directory")}
                className="gap-2"
              >
                <Users className="w-4 h-4" />
                Directory
              </Button>
              <Button 
                variant={view === "analytics" ? "secondary" : "ghost"} 
                size="sm" 
                onClick={() => setView("analytics")}
                className="gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </Button>
              <Button 
                variant={view === "submissions" ? "secondary" : "ghost"} 
                size="sm" 
                onClick={() => setView("submissions")}
                className="gap-2"
              >
                <ClipboardList className="w-4 h-4" />
                Submissions
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white/5 border-white/10 focus:border-verse-purple/50 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === "directory" ? (
          <>
            {/* Intro Section */}
            <section className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <Badge variant="outline" className="mb-4 border-verse-purple/30 text-verse-purple bg-verse-purple/5 px-3 py-1">
              Verse Community Leadership Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Meet the Architects of the <span className="text-gradient">Verse Ecosystem</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Our leadership program brings together the brightest minds to drive growth, 
              innovation, and community excellence. Explore the roles that make it all happen.
            </p>
          </motion.div>

          {/* Verse Symbol Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-verse-purple/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-verse-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-verse-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Main Symbol */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)] rotate-12 group hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
              <img 
                src="https://i.ibb.co/tTSRYR7X/IMG-1530.jpg" 
                alt="Verse Ecosystem" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              <Sparkles className="absolute top-4 right-4 w-10 h-10 text-white animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-verse-purple rounded-full blur-[2px] animate-bounce" />
            <div className="absolute bottom-10 right-0 w-3 h-3 bg-verse-blue rounded-full blur-[2px] animate-pulse" />
            <div className="absolute bottom-0 left-10 w-2 h-2 bg-verse-cyan rounded-full blur-[2px] animate-ping" />
          </motion.div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <ScrollArea className="w-full pb-4">
              <TabsList className="bg-white/5 border border-white/10 p-1 h-auto flex-wrap justify-start">
                <TabsTrigger 
                  value="All" 
                  className="data-[state=active]:bg-verse-purple data-[state=active]:text-white px-4 py-2"
                >
                  All Roles
                </TabsTrigger>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-verse-purple data-[state=active]:text-white px-4 py-2"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
          </Tabs>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => {
              const Icon = CATEGORY_ICONS[item.category] || Users;
              const colorClass = CATEGORY_COLORS[item.category] || "from-slate-500 to-slate-400";
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="glass glass-hover h-full flex flex-col overflow-hidden group">
                    <div className={`h-1.5 w-full bg-gradient-to-r ${colorClass}`} />
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClass} bg-opacity-10`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-white/5 text-[10px] uppercase tracking-wider text-slate-400 border-none">
                          ID: {item.id.toString().padStart(2, '0')}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-verse-purple transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                        {item.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col gap-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border border-white/10">
                            <AvatarFallback className="bg-gradient-to-br from-verse-purple/20 to-verse-blue/20 text-verse-purple text-xs font-bold">
                              {item.holder.substring(1, 3).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Holder</p>
                            <p className="text-sm font-mono font-medium text-verse-cyan">
                              {item.holder}
                            </p>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-verse-purple/20 text-slate-400 hover:text-verse-purple">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

            {filteredData.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No roles found</h3>
                <p className="text-slate-400">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </>
        ) : view === "analytics" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-verse-blue" />
                <h2 className="text-2xl font-bold uppercase tracking-wider">Verse Analytics</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-none">+12%</Badge>
                  </div>
                  <CardTitle className="text-4xl font-bold mt-4">132</CardTitle>
                  <CardDescription className="uppercase text-[10px] tracking-widest font-bold text-slate-500">Total Reach</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <Activity className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase">
                      <Circle className="w-2 h-2 fill-current animate-pulse" />
                      Live
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold mt-4">2</CardTitle>
                  <CardDescription className="uppercase text-[10px] tracking-widest font-bold text-slate-500">Active Nodes</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <LayoutDashboard className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold mt-4">5</CardTitle>
                  <CardDescription className="uppercase text-[10px] tracking-widest font-bold text-slate-500">Total Events</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="glass border-white/10 p-6">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Weekly Engagement</h3>
                  <p className="text-xs text-slate-500">Last 7 Days</p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ENGAGEMENT_DATA}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      dy={10}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-slate-900 border border-white/10 p-3 rounded-lg shadow-xl">
                              <p className="text-xs font-bold text-white mb-1">{label}</p>
                              <p className="text-xs text-slate-400">visits : <span className="text-verse-blue">{payload[0].value}</span></p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="visits" radius={[4, 4, 0, 0]}>
                      {ENGAGEMENT_DATA.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === 6 ? '#3b82f6' : '#334155'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="flex justify-center">
              <Tabs defaultValue="upcoming" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-4 glass border-white/10">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="live">Live</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                  <TabsTrigger value="all">All</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-verse-purple" />
                <h2 className="text-2xl font-bold uppercase tracking-wider">VCLP Submissions</h2>
              </div>
              <Badge variant="outline" className="glass border-verse-purple/30 text-verse-purple">
                {submissions.length} Total Applications
              </Badge>
            </div>

            <Card className="glass border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Applicant</TableHead>
                    <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Target Role</TableHead>
                    <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Date</TableHead>
                    <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
                    <TableHead className="text-right text-slate-400 font-bold uppercase text-[10px] tracking-widest">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((sub) => (
                    <TableRow key={sub.id} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 border border-white/10">
                            <AvatarFallback className="bg-verse-purple/20 text-verse-purple text-[10px] font-bold">
                              {sub.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-white">{sub.name}</p>
                            <p className="text-xs text-verse-cyan font-mono">{sub.telegram}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-white/5 text-slate-300 border-none font-medium">
                          {sub.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-400 text-sm font-mono">
                        {sub.date}
                      </TableCell>
                      <TableCell>
                        {sub.status === "pending" ? (
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase">
                            <Clock className="w-3 h-3" />
                            Pending
                          </div>
                        ) : sub.status === "approved" ? (
                          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase">
                            <CheckCircle2 className="w-3 h-3" />
                            Approved
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold uppercase">
                            <AlertCircle className="w-3 h-3" />
                            Rejected
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          Review
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {submissions.length === 0 && (
              <div className="text-center py-20 glass rounded-2xl border-dashed border-white/10">
                <p className="text-slate-500">No submissions yet.</p>
              </div>
            )}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-verse-purple" />
              <span className="font-bold text-lg">Verse Ecosystem</span>
            </div>
            <p className="text-sm text-slate-500">Building the future of community-driven leadership.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://x.com/verseEcosystem" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">X (Twitter)</a>
            <a href="https://t.me/GetVerse/177601" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">Telegram</a>
          </div>

          <div className="text-xs text-slate-600">
            © 2024 Verse VCLP. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Info Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-full shadow-2xl shadow-verse-purple/40 bg-verse-purple hover:bg-verse-purple/90 gap-2 h-14 px-8 text-lg font-bold">
              <Info className="w-5 h-5" />
              Join the VCLP
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-white/10 text-white sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-verse-purple" />
                Apply for VCLP
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-base pt-2">
                Fill out the form below to submit your application for the Verse Community Leadership Program.
              </DialogDescription>
            </DialogHeader>

            {showSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Application Submitted!</h3>
                <p className="text-slate-400">
                  Thank you for your interest. Our team will review your application and get back to you on Telegram.
                </p>
                <Button 
                  variant="outline" 
                  className="glass border-white/10 mt-4"
                  onClick={() => setShowSuccess(false)}
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-400">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required
                      className="bg-white/5 border-white/10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telegram" className="text-xs uppercase tracking-widest text-slate-400">Telegram @</Label>
                    <Input 
                      id="telegram" 
                      placeholder="@username" 
                      required
                      className="bg-white/5 border-white/10"
                      value={formData.telegram}
                      onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-xs uppercase tracking-widest text-slate-400">Target Role</Label>
                  <Input 
                    id="role" 
                    placeholder="e.g. Community Support" 
                    required
                    className="bg-white/5 border-white/10"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-xs uppercase tracking-widest text-slate-400">Why do you want to join?</Label>
                  <Textarea 
                    id="reason" 
                    placeholder="Tell us about your experience and motivation..." 
                    required
                    className="bg-white/5 border-white/10 min-h-[100px]"
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  />
                </div>

                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-3">
                  <Info className="w-5 h-5 text-blue-400 shrink-0" />
                  <p className="text-xs text-slate-400">
                    You can also join us on Telegram at <a href="https://t.me/GetVerse/177601" target="_blank" className="text-verse-cyan hover:underline">t.me/GetVerse/177601</a> for more info.
                  </p>
                </div>

                <DialogFooter className="pt-4">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-verse-purple to-verse-blue hover:opacity-90 font-bold py-6 text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
